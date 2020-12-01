
const express = require('express');
const router = express.Router();

const db = require('../models');



// Get all products
router.get('/', async function (req, res) {

    let query = {};
    
    
    // Sorting
    if(req.query.sort){
        if(req.query.sort === 'price')
            query.order = [['price', 'DESC']];            // DESC or ASC
        else if(req.query.sort === 'name')
            query.order = [['name', 'ASC']];
    }


    // Pagination
    if(req.query.limit){
        query.limit = req.query.limit;
    }

    if(req.query.offset){
        query.offset = req.query.offset;
    }

    // Filtering
    if(req.query.visible){
        if(typeof query.where === 'undefined')                  // ... spread operator would remove this
            query.where = {};

        query.where.visible = req.query.visible;
    }

    if(req.query.featured){
        if(typeof query.where === 'undefined')
            query.where = {};
        query.where.featured = req.query.featured;
    }

    if(req.query.category){
        // get products in category  
        if(typeof query.include === 'undefined')
            query.include = [];

        query.include.push({
            model: db.category,
            where: { id: req.query.category }
        });

    }

    if(req.query.include){
        let splitIncludes = req.query.include.split(',');

        if(splitIncludes.includes('categories')){
            if(typeof query.include === 'undefined')
                query.include = [];

            query.include.push({
                model: db.category
            })
        }

        if(splitIncludes.includes('thumbnails')){
            if(typeof query.include === 'undefined')
                query.include = [];

            query.include.push({        // autmoatically grabs images with product_id = product.id
                model: db.image,
                where: { is_thumbnail: true },
            });
        }

        
    }



    const dbResponse = await db.product.findAll(query);

    const data = dbResponse.map((product) => {
        return product.dataValues;
    });

    // includes
    // if(req.query.include){
    //     let splitIncludes = req.query.include.split(',');

    //     console.log('includes', splitIncludes);

    //     for(let product of data){
    //         if(splitIncludes.includes('categories')){
    //             product.categories = await includeCategories(product.id);
    //         }

    //         if(splitIncludes.includes('thumbnails')){
    //             product.images = await includeImages(product.id);
    //         }

    //     }
    // }


    // meta data
    // THIS CALL IS SLOW. Cache or replace!!!!!!!!!
    const totalProductNum = await db.product.count();
    const per_page = parseInt(req.query.limit ? req.query.limit : 10);
    const offset = parseInt(req.query.offset ? req.query.offset : 0)

    const meta = {
        pagination: {
            total: totalProductNum,                                        // total number of products
            count: data.length,
            per_page: per_page,
            current_page: Math.ceil(totalProductNum / offset),                                  // TODO: BROKEN!!!!!   
            total_pages: Math.ceil(totalProductNum / per_page),                                 // total / per_page
            too_many: false,
        }
    };


    res.send({data, meta}); 
});

// Get product 
router.get('/:id', async function (req, res) {

    const dbResponse = await db.product.findOne({where: {id: req.params.id}});
    const response = {data: dbResponse.dataValues}

    if(req.query.include){
        let splitIncludes = req.query.include.split(',');

        console.log('includes', splitIncludes);

        if(splitIncludes.includes('categories')){
            response.data.categories = await includeCategories(req.params.id);
        }
        if(splitIncludes.includes('images')){
            response.data.images = await includeImages(req.params.id);
        }
    }

    res.send(response);
});


// async function includeCategories(productId){
//     const prodCatResp = await db.product_category.findAll({where:{productId: productId}});               // NO IDEA why this doesn't use product_id but hey

//     let categoryData = [];
//     for(let prodCat of prodCatResp){
//         console.log('looking up ' + prodCat);
//         const categoryResp = await db.category.findOne({where: { id: prodCat.categoryId }});

//         console.log(categoryResp.dataValues);
//         categoryData.push(categoryResp.dataValues);
//     }

//     return categoryData;
// }

async function includeImages(productId){
    const imgRespose = await db.image.findAll({where:{productId: productId}});               // NO IDEA why this doesn't use product_id but hey
    const images = imgRespose.map((image) => {
        return image.dataValues;
    });

    return images;
}






// Delete Product
router.delete('/:id', async function(req, res) {
    const dbresponse = await db.product.destroy({where: {id: req.params.id}} );

    let response;

    if(dbresponse === 1){
        response = {
            data: {
                status: 'success'
            }
        }
    }

    res.send(response);
});



// "variants": [
//     {
//       "sku": "SKU-BLU",
//       "option_values": [
//         {
//           "option_display_name": "Mug Color",
//           "label": "Blue"
//         }
//       ]
//     },
//     {
//       "sku": "SKU-GRAY",
//       "option_values": [
//         {
//           "option_display_name": "Mug Color",
//           "label": "Gray"
//         }
//       ]
//     }
//   ]


// Create Product
router.post('/', async function(req, res) {

    // create product object from body
    const product = {
        id: Math.floor(Math.random() * 9000),
        name: req.body.name,
        slug: req.body.slug,
        sku: req.body.sku,
        description: req.body.description,
        commodity_type: req.body.commodity_type,
        manage_stock: req.body.manage_stock,
        inventory: req.body.inventory,
        price: req.body.price,
        visible: req.body.visible,
        featured: req.body.featured
    }

    console.log(product);
    
    const dbresponse = await db.product.create(product);

    const response = {
        data:  dbresponse.dataValues,
    }

    res.send(response);
});


// Update product
router.put('/:id', async function(req, res) {
    try{

        const data = {
            name: req.body.name,
            slug: req.body.slug,
            sku: req.body.sku,
            description: req.body.description,
            commodity_type: req.body.commodity_type,
            manage_stock: req.body.manage_stock,
            inventory: req.body.inventory,
            price: req.body.price,
            visible: req.body.visible,
            featured: req.body.featured
        }

        const response = await db.product.update(data, {where: {id: req.params.id}});    
        console.log(response);

        res.send(response);
    }
    catch(err){
        console.error(err);
    }
});


// ============== Image routes

// Get all product images
router.get('/:prodId/images', async function(req, res) {
    try{
        const dbResponse = await db.image.findAll({where: {productId: req.params.prodId}});
        const data = dbResponse.map((product) => {
            return product.dataValues;
        });

        res.send({data}); 
    }
    catch(err){
        console.error(err);
    }
});

// Get product Image
router.get('/:prodId/images/:imageId', async function(req, res) {
    try{
        const dbResponse = await db.image.findOne({where:{id:req.params.imageId, productId: req.params.prodId}});          // Using product id here is not entirely neccesary but *shrug*
        res.send({data: dbResponse.dataValues}); 
    }
    catch(err){
        console.error(err);
    }
});

// Create product Image
router.post('/:prodId/images', async function(req, res) {
    try{
        // create image object from body
        const image = {
            id: Math.floor(Math.random() * 9000),
            is_thumbnail: req.body.is_thumbnail,
            sort_order: req.body.sort_order,
            description: req.body.description,
            image_files: req.body.image_files,
            url_zoom: req.body.url_zoom,
            url_standard: req.body.url_standard,
            url_thumbnail: req.body.url_thumbnail,
            url_tiny: req.body.url_tiny,
            productId: req.params.prodId,
        }

        const dbresponse = await db.image.create(image);

        const response = {
            data:  dbresponse.dataValues,
        }

        res.send(response);
    }
    catch(err){
        console.error(err);
    }
});

// Delete product Image
router.delete('/:prodId/images/:imageId', async function (req, res) {
    const dbResponse = await db.image.destroy({where:{id:req.params.imageId, productId: req.params.prodId}});

    let response = {
        data: {
            status: dbResponse === 1 ? 'success' : 'failure'
        }
    }

    res.send(response); 
});






// {
//     "product_id": 134,
//     "name": "Size Rectangle",
//     "display_name": "Size",
//     "type": "rectangles",
//     "option_values": [
//       {
//         "label": "S",
//         "sort_order": 0,
//         "is_default": false
//       },
//       {
//         "label": "M",
//         "sort_order": 1,
//         "is_default": true
//       },
//       {
//         "label": "L",
//         "sort_order": 2,
//         "is_default": false
//       }
//     ]
//   }


// Add product options
router.post('/:prodId/options', async function (req, res) {

    try{
        // create variant object from body
        const optionResponse = await createOption(req);
        await createOptionValues(req, optionResponse.dataValues.id);

        res.send('ok');
    }
    catch(err){
        console.error(err);
    }

});


async function createOption(req){
    try{
        const option = {
            id: Math.floor(Math.random() * 9000),
            name: req.body.name,
            type: req.body.type,
            sort_order: req.body.sort_order,
            productId: req.body.product_id,
        }

        const dbresponse = await db.option.create(option);
        return dbresponse;
    }
    catch(err){
        console.error(err);
    }
}

async function createOptionValues(req, optionId){
    try{
        const bodyOptionValues = req.body.option_values;

        for(let bodyOption of bodyOptionValues){
            const optionValue = {
                id: Math.floor(Math.random() * 9000),
                label: bodyOption.label,
                sort_order: bodyOption.sort_order,
                is_default: bodyOption.is_default,
                optionId: optionId
            }

            const dbresponse = await db.option_value.create(optionValue);
        }
    }
    catch(err){
        console.error(err);
    }
}



// sku
// option_values

// {
//     "cost_price": 3,
//     "price": 12.99,
//     "retail_price": 15.99,
//     "weight": 1,
//     "width": 4,
//     "height": 14.6,
//     "depth": 22,
//     "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Anglel_Bless_Legendary_Hills_1_m%C4%9Bs%C3%ADc_st%C3%A1%C5%99%C3%AD.jpg",
//     "is_free_shipping": true,
//     "purchasing_disabled": true,
//     "purchasing_disabled_message": "This item not available at this time.",
//     "product_id": 134,
//     "sku": "SMALL",
//     "option_values": [
//       {
//         "id": 255,
//         "option_id": 270
//       }
//     ]
//   }

// Add product variant
router.post('/:prodId/variants', async function (req, res) {

    const createVariantResp = await createVariant(req);

    const response = {
        data:  createVariantResp.dataValues,
    }

    res.send(response); 
});


async function createVariant(req){
    try{
        // create variant object from body
        const variant = {
            id: Math.floor(Math.random() * 9000),
            slug: req.body.slug,
            sku: req.body.sku,
            name: req.body.name,
            purchaseable: req.body.name,
            manage_stock: req.body.manage_stock,
            inventory: req.body.inventory,
            price: req.body.price,
            productId: req.params.prodId,                                   // ERROR:  This does not currently register the options associated with this variant
        }

        const dbresponse = await db.variant.create(variant);

        return dbresponse;
    }
    catch(err){
        console.error(err);
    }

}


module.exports = router;
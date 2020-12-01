const express = require('express');
const router = express.Router();

const db = require('../models');



// router.get('/', async function (req, res) {
//     const dbResponse = await db.image.findAll();
//     const data = dbResponse.map((product) => {
//         return product.dataValues;
//     });

//     res.send({data}); 
// });


// router.get('/:id', async function (req, res) {
//     const dbResponse = await db.image.findOne({where:{id:req.params.id}});

//     res.send({data: dbResponse.dataValues}); 
// });


// router.delete('/:id', async function (req, res) {
//     const dbResponse = await db.image.destroy({where:{id:req.params.id}});

//     let response; 

//     if(dbResponse === 1){
//         response = {
//             data: {
//                 status: 'success'
//             }
//         }
//     }
//     else{
//         response = {
//             error: {
//                 message: 'failed to delete image'
//             }
//         }
//     }

//     res.send(response); 
// });


// router.post('/', async function(req, res) {

//     // create product object from body
//     const image = {
//         id: Math.floor(Math.random() * 9000),
//         is_thumbnail: req.body.is_thumbnail,
//         sort_order: req.body.sort_order,
//         description: req.body.description,
//         image_files: req.body.image_files,
//         url_zoom: req.body.url_zoom,
//         url_standard: req.body.url_standard,
//         url_thumbnail: req.body.url_thumbnail,
//         url_tiny: req.body.url_tiny,
//         productId: req.body.product_id,
//     }

//     const dbresponse = await db.image.create(image);

//     const response = {
//         data:  dbresponse.dataValues,
//     }

//     res.send(response);
// });




module.exports = router;


const express = require('express');
const router = express.Router();

const db = require('../models');


// Create new cart
router.post('/', async function (req, res) {
    let dbResponse;
    
    // create new cart and return id     
    // WARNING: how can I make sure this isn't an easy way to fill the db????????????????
    dbResponse = await db.cart.create({
        id: Math.round(Math.random() * 10000)
    });


    res.send({data: dbResponse.dataValues}); 
});



// Get cart 
router.get('/:id', async function (req, res) {
    const cartResponse = await db.cart.findOne({where: {id: req.params.id}});
    const response = {
        data: cartResponse.dataValues
    }


    if(req.query.include === 'items'){
        let products = [];

        // Get all cart Items
        const itemsResp = await db.cart_item.findAll({where: {cart_id: req.params.id}});        // TODO: Use a postgres view for this instead of looking up every product

        console.log('itemsResp', itemsResp);

        // Resolve cart items into products
        for(let item of itemsResp){
            const prodResp = await db.product.findOne({where: {id: item.dataValues.productId}})
            console.log('prodResp', prodResp);
            console.log('item', item);
            console.log('item.dataValues.quantity', item.dataValues.quantity);

            const itemAndProduct = prodResp.dataValues;
            itemAndProduct.quantity = item.quantity;
    
            products.push(itemAndProduct);
        }

        response.data.items = products;
    }

    res.send(response);
});

// Get Cart Items
router.get('/:id/items', async function (req, res) {

    let products = [];

    // Get all cart Items
    const itemsResp = await db.cart_item.findAll({where: {cart_id: req.params.id}});            // TODO: Use a postgres view for this instead of looking up every product

    // Resolve cart items into products
    for(let item of itemsResp){
        const prodResp = await db.product.findOne({where: {id: item.dataValues.productId}});
        const productId = prodResp.id;

        console.log('prodResp', prodResp);
        console.log('item', item);
        console.log('item.dataValues.quantity', item.dataValues.quantity);

        const itemAndProduct = {
            ...prodResp.dataValues
        }

        itemAndProduct.id = item.id;                //prodResp.dataValues carries the product id
        itemAndProduct.product_id = productId;
        itemAndProduct.quantity = item.quantity;

        const thumbnail = await getProductThumbnail(productId);

        itemAndProduct.thumbnail = thumbnail;


        products.push(itemAndProduct);
    }

    const response = {
        data: products
    }

    res.send(response);
});


async function getProductThumbnail(productId){
    const thumbResp = await db.image.findOne({where:{product_id:productId, is_thumbnail: true}});
    console.log(thumbResp);

    return thumbResp.dataValues;
}




// Add items to cart
router.post('/:id/items', async function (req, res) {

    const itemId = req.body.id;
    const cartId = req.params.id;

    const cartResp = await db.cart.findOne({where: {id: cartId}});                       // This is very error prone
    const prodResp = await db.product.findOne({where: {id: itemId}});

    //create cart item      TODO: Make this a function
    const item = {
        id: Math.floor(Math.random() * 10000),
        quantity: parseInt(req.body.quantity),
        productId: prodResp.dataValues.id,
        cartId: cartResp.dataValues.id
    }

    console.log(item);

    const itemResp = await db.cart_item.create(item);
    
    console.log(itemResp);
    console.log(itemResp.dataValues.id);



    res.send({data: itemResp.dataValues});
});


// remove items from cart
router.delete('/:cartId/items/:itemId', async function (req, res) {
    console.log(req.params.cartId);
    console.log(req.params.itemId);
    
    const response = await db.cart_item.destroy({where:{id:req.params.itemId, cartId: req.params.cartId}});             // Item id should be enough but eh
    console.log(response);

    if(response === 1)
        res.send('{"data": {"status":"Removed Item"}}');
    else
        res.send('{"data": {"status":"Item Not Found"}}');
});


// Delete cart
router.delete('/:id', async function(req, res) {
    
    console.log(req.params.id);

    const cartResponse = await db.cart.destroy({where:{id: req.params.id}});
    const cartItemResponse = await db.cart_item.destroy({where:{cartId: req.params.id}});

    res.send('{"data": {"status":"Deleted Cart"}}');
});




// Mol style checkout
router.post('/:cartId/checkout', async function(req, res) {
    
    console.log('cartId', req.params.cartId);


    // create addresses
    const billing_address = {
        id: Math.floor(Math.random() * 10000),
        first_name: req.body.data.billing_address.first_name,
        last_name: req.body.data.billing_address.last_name,
        street_1: req.body.data.billing_address.street_1,
        street_2: req.body.data.billing_address.street_2,
        city: req.body.data.billing_address.city,
        state: req.body.data.billing_address.state,
        zip: req.body.data.billing_address.zip,
        country: req.body.data.billing_address.country,
        phone: req.body.data.billing_address.phone,
    }

    const shipping_address = {
        id: Math.floor(Math.random() * 10000),
        first_name: req.body.data.shipping_address.first_name,
        last_name: req.body.data.shipping_address.last_name,
        street_1: req.body.data.shipping_address.street_1,
        street_2: req.body.data.shipping_address.street_2,
        city: req.body.data.shipping_address.city,
        state: req.body.data.shipping_address.state,
        zip: req.body.data.shipping_address.zip,
        country: req.body.data.shipping_address.country,
        phone: req.body.data.shipping_address.phone,
    }


    //create addresses
    const billingResp = await db.address.create(billing_address);
    // console.log('billResp', billingResp);

    const shippingResp = await db.address.create(shipping_address);
    // console.log('shippingResp', shippingResp);

    //get cart and items
    const cartResp = await db.cart.findOne({where: {id: req.params.cartId}});
    const cart = cartResp.dataValues;
    // console.log('cart', cart);

    const itemsResp = await db.cart_item.findAll({where: {cart_id: req.params.cartId}});
    const cart_items = itemsResp.map( (item) => item.dataValues);
    // console.log('cart_items', cart_items);
    
    // get customer
    const customerResp = await db.customer.findOne({where: {id: req.body.data.customer_id }} );
    // console.log('customerResp',customerResp);


    //create order and order items from cart and cart itemss
    const orderResp = await createOrder(billingResp.dataValues, shippingResp.dataValues, customerResp.dataValues);
    const order_items = await createOrderItems(orderResp.dataValues.id, cart_items);


    // create response
    let response;
    response = orderResp.dataValues;
    response.customer = customerResp.dataValues;
    response.billing_address = billing_address;
    response.shipping_address = shipping_address;
    response.items = order_items;
    
    res.send(response);
});



async function createOrder(billing_address, shipping_address, customer){

    const order = {
        id: Math.floor(Math.random() * 10000),
        customerId: customer.id,
        shippingAddressId: shipping_address.id,
        billingAddressId: billing_address.id,
        status: 'incomplete',
        payment: 'unpaid',
        shipping: 'unfulfilled'
    }

    const orderResp = await db.order.create(order);
    return orderResp;
}

async function createOrderItems(orderId, cart_items){

    let order_items = [];

    for(let item of cart_items){
        let resp = await db.order_item.create({
            id: Math.floor(Math.random() * 10000),
            quantity: item.quantity,
            orderId,
            productId: item.productId
        })
        order_items.push(resp.dataValues);
    }

    console.log(order_items);

    return order_items;
}

module.exports = router;



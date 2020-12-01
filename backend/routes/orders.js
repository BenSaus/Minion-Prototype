const express = require('express');
const router = express.Router();

const db = require('../models');


// Get Orders
router.get('/', async function(req, res){

    const dbResponse = await db.order.findAll();

    const data = dbResponse.map((product) => {
        return product.dataValues;
    });

    const response = {
        data: data
    }

    res.send(response);
});


// Get Order
router.get('/:id', async function(req, res){

    const orderResp = await db.order.findOne({where: {id: req.params.id}});
    const response = {data: orderResp.dataValues};

    const billingId = orderResp.dataValues.billingAddressId;
    const shippingId = orderResp.dataValues.shippingAddressId;
    const customerId = orderResp.dataValues.customerId;

    const custResp = await db.customer.findOne({where: {id: customerId}});
    response.data.customer = custResp.dataValues;

    const shipAddResp = await db.address.findOne({where: {id: shippingId}});
    response.data.shipping_address = shipAddResp.dataValues;

    const billAddResp = await db.address.findOne({where: {id: billingId}});
    response.data.billing_address = billAddResp.dataValues;


    response.data.items = await getOrderItems(req.params.id);

    res.send(response);
});


async function getOrderItems(orderId){
    const orderItemsResp = await db.order_item.findAll({where: {orderId: orderId}});

    let items = [];

    for(let orderItem of orderItemsResp){
        const productId = orderItem.dataValues.productId;

        const productResp = await db.product.findOne({where: {id: productId}});
        const item = {
            id: orderItem.id,
            sku: productResp.dataValues.sku,
            productId: productResp.dataValues.id,
            name: productResp.dataValues.name,
            quantity: orderItem.quantity
        }

        items.push(item);
    }

    return items;
}

router.get('/:id/transactions', async function(req,res){

    const transResp = await db.transaction.findAll({where: {orderId: req.params.id}});

    const response = {
        data: transResp.map(transaction => transaction.dataValues)
    }

    res.send(response);
});


// update shipping only
router.put('/:id', async function(req, res){

    const orderResp = await db.order.findOne({where: {id: req.params.id}});
    const data = orderResp.dataValues;

    data.shipping = req.body.shipping;
    const updateResp = await db.order.update(data, {where: {id: req.params.id}});

    let response = {
        data: {
            status: updateResp[0] === 1 ? 'success' : 'failure'
        }
    }

    res.send(response); 
});



// Authorize payment
router.post('/:orderId/authorize', async function (req, res) {

    const orderResp = await db.order.findOne({ where:{ id:req.params.orderId }} );
    const amount = calculatePrice(orderResp.dataValues);

    // create transaction object
    const transaction = {
        id: Math.floor(Math.random() * 1000),
        reference: req.body.data.gateway,               // foriegn id for payment gateway, 'manual' for us
        gateway: req.body.data.gateway,
        amount: amount,
        transaction_type: 'authorize',
        status: 'complete',                         // Not sure about this
        orderId: req.params.orderId,
    }

    const transResp = await db.transaction.create(transaction);



    res.send(transResp.dataValues);
});

function calculatePrice(order){
    return 100;
}


// Capture transaction
router.post('/:orderId/transactions/:transId/capture', async function (req, res) {

    const transResp = await db.transaction.update( {transaction_type: 'capture'},  { where: {id: req.params.transId, transaction_type: 'authorize'} } );
    console.log(transResp);

    let response = {
        data: {
            status: transResp[0] === 1 ? 'success' : 'failure'
        }
    }
    
    res.send(response);
});







module.exports = router;

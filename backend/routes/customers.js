
const express = require('express');
const router = express.Router();

const db = require('../models');



router.get('/', async function (req, res) {

    let dbResponse;
    
    // ================================================
    // Basic Filter
    // ================================================

    if(req.query.email){
        dbResponse = await db.customer.findAll({where: {email: req.query.email} });                 // WARNING!!! PUMPING PARAMETER STRAIGHT INTO QUERY!!!!
    }
    else{
        dbResponse = await db.customer.findAll();
    }

    const data = dbResponse.map((customer) => {
        return customer.dataValues;
    });

    res.send({data}); 
});


router.get('/:id', async function (req, res) {
    const dbResponse = await db.customer.findOne({where: {id: req.params.id}});
    res.send({data: dbResponse.dataValues});
});



router.delete('/:id', async function(req, res) {
    const dbresponse = await db.customer.destroy({where: {id: req.params.id}} );

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



router.post('/', async function(req, res) {

    // create customer object from body
    const customer = {
        id: Math.floor(Math.random() * 9000),
        company: req.body.company,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        accepts_marketing: req.body.accepts_marketing,
    }

    const dbresponse = await db.customer.create(customer);

    const response = {
        data: dbresponse.dataValues
    }

    res.send(response);
});



router.put('/:id', async function(req, res) {

});




module.exports = router;
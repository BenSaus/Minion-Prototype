
const express = require('express');
const router = express.Router();

const db = require('../models');



router.get('/', async function (req, res) {
    let dbResponse;
    let query = {};
    
    if(req.query.name){
        query = {where: {name: req.query.name}};
    }
    else if(req.query.is_visible){
        query = {where: {is_visible: req.query.is_visible}};
    }


    dbResponse = await db.category.findAll(query);

    const data = dbResponse.map((category) => {
        return category.dataValues;
    });

    res.send({data}); 
});

router.get('/:id', async function (req, res) {
    const dbResponse = await db.category.findOne({where: {id: req.params.id}});

    res.send({data: dbResponse.dataValues});
});



router.delete('/:id', async function(req, res) {
    const dbresponse = await db.category.destroy({where: {id: req.params.id}} );
    console.log(dbresponse);

    let response = {
        data: {
            status: dbresponse[0] === 1 ? 'success' : 'failure'
        }
    }


    res.send(response);
});



router.post('/', async function(req, res) {

    // create category object from body
    const category = {
        id: Math.floor(Math.random() * 9000),
        name: req.body.name,
        description: req.body.description,
        sort_order: req.body.sort_order,
        is_visible: req.body.is_visible,
        image_url: req.body.image_url,
    }

    const dbresponse = await db.category.create(category);

    const response = {
        data:  dbresponse.dataValues,
    }

    res.send(response);
});





router.put('/:id', async function(req, res) {

    const updateableFields = [
        'name',
        'description',
        'sort_order',
        'is_visible',
        'image_url',
    ]

    let updatedCategory = getUpdatedFields(updateableFields, req.body);
    console.log(updatedCategory);

    const dbresponse = await db.category.update(updatedCategory, {where: {id: req.params.id}})
    console.log(dbresponse);

    let response = {
        data: {
            status: dbresponse[0] === 1 ? 'success' : 'failure'
        }
    }


    res.send(response);
});


function getUpdatedFields(updatableFields, updatedData){
    
    let updatedCategory = {};

    for(let key of updatableFields){
        console.log('key',key);

        if( Object.keys(updatedData).includes(key)){
            console.log('contained');
            updatedCategory[key] = updatedData[key];
        }
    }

    return updatedCategory;
}



module.exports = router;
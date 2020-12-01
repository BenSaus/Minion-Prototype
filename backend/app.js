
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 9000;

const db = require('./models');
// db.sequelize.sync({force:true});

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const customersRouter = require('./routes/customers');
const categoriesRouter = require('./routes/categories');
const cartsRouter = require('./routes/carts');
const imagesRouter = require('./routes/images');
const ordersRouter = require('./routes/orders');


app = express();


// Setup parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS Setup
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");         // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT, PATH");
    next();
  });



app.use('/', indexRouter);  
app.use('/products', productsRouter); 
app.use('/categories', categoriesRouter); 
app.use('/customers', customersRouter); 
app.use('/carts', cartsRouter); 
app.use('/images', imagesRouter); 
app.use('/orders', ordersRouter); 


app.listen(port, () => console.log(`Example app listening on port ${port}!`));




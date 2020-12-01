## Minion eCommerce API Prototype

In 2019 after building an eCommerce app, I wondered if I could replace a third party eCommerce API with one of my own creation. I created this prototype to test that idea.

**This code was never intended to be put into production. It was a proof of concept and so development speed was primary**

## Stack

### Backend

The backend is a simple REST API built with Node.

-   NodeJS
-   HTTP Framework: Express
-   Database ORM: Sequelize
-   Database: PostgreSQL
-   Image processing: SharpJS
-   Image Storage: AWS S3

#### Things of Note:

-   I spent some time researching and building the database Schema. You can find the models [here](https://github.com/BenSaus/Minion-Prototype/tree/master/backend/models)
-   I often used seed data. You can look through that [here](https://github.com/BenSaus/Minion-Prototype/tree/master/backend/seeders)
-   Though never 100% complete, my varient product data type was inspired by [BigCommerce](https://developer.bigcommerce.com/api-reference/store-management/catalog/product-variants/createvariant). Through my research I found Moltin's (now Elastipath's) variation method required a backend process to generate product data, which I didn't like. Shopify's variation method was a little limited and only 3 variations on a product were possible.

### Dashboard

The dashboard was intended to give site owner's the ability to modify their product data.

-   Javascript Framework: VueJS v2
-   CSS Framework: BootstrapVue and SASS
-   HTTP Request Framework: Request

### Frontend

The frontend was a test site to ensure the API was providing required functionality

-   Javascript Framework: VueJS v2
-   CSS Framework: BootstrapVue and SASS
-   HTTP Request Framework: Request

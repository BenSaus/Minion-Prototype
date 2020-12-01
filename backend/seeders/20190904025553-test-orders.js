'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('orders', [
        {id: 414, customer_id: 62, shipping_address_id: 512, billing_address_id: 514, status: 'complete', payment: 'paid', shipping: 'fulfilled'},
        {id: 415, customer_id: 63, shipping_address_id: 513, billing_address_id: 513, status: 'incomplete', payment: 'paid', shipping: 'unfulfilled'},
        {id: 416, customer_id: 62, shipping_address_id: 513, billing_address_id: 512, status: 'incomplete', payment: 'unpaid', shipping: 'unfulfilled'},

    ], {});
},

  down: (queryInterface, Sequelize) => {


  }
};

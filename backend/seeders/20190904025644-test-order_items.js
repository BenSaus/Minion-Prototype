'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('order_items', [
        {id: 614, quantity: 1, order_id: 414, product_id: 1},
        {id: 615, quantity: 2, order_id: 414, product_id: 1},

        {id: 616, quantity: 2, order_id: 415, product_id: 2},

        {id: 617, quantity: 1, order_id: 416, product_id: 2},
        {id: 618, quantity: 1, order_id: 416, product_id: 3},

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return Promise.resolve();
  }
};

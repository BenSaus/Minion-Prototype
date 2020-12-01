'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cart_items', [
        {id: 311, quantity: 1, cart_id: 1111, product_id: 2},
        {id: 312, quantity: 1, cart_id: 1111, product_id: 1},
        {id: 313, quantity: 2, cart_id: 1111, product_id: 3},
    ], {});

  },

  down: (queryInterface, Sequelize) => {

  }
};

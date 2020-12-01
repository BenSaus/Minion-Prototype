'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('options', [
        {id: 41, product_id: 1, name: 'Size', type: 'dropdown', sort_order: 0},
        {id: 42, product_id: 1, name: 'Chain Length', type: 'dropdown', sort_order: 1},
        {id: 43, product_id: 2, name: 'Size', type: 'dropdown', sort_order: 0},
    ], {});

  },

  down: (queryInterface, Sequelize) => {

     return queryInterface.bulkDelete('options', null, {trunecate: true});
  }
};

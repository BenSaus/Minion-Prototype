'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product_category', [
        {created_at:'08-Jan-1999', updated_at:'08-Jan-1999', product_id: 1, category_id: 0},
        {created_at:'08-Jan-1999', updated_at:'08-Jan-1999', product_id: 2, category_id: 0},
        {created_at:'08-Jan-1999', updated_at:'08-Jan-1999', product_id: 3, category_id: 1},
        {created_at:'08-Jan-1999', updated_at:'08-Jan-1999', product_id: 3, category_id: 4},
        {created_at:'08-Jan-1999', updated_at:'08-Jan-1999', product_id: 4, category_id: 3},
        {created_at:'08-Jan-1999', updated_at:'08-Jan-1999', product_id: 4, category_id: 4},
        {created_at:'08-Jan-1999', updated_at:'08-Jan-1999', product_id: 5, category_id: 1},

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('product_category', null, {trunecate: true});
  }
};

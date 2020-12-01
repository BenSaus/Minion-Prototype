'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('carts', [
        {id: 1111},
    ], {});

  },

  down: (queryInterface, Sequelize) => {

  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('option_values', [
        {id: 51, option_id: 41, label: 'Small', sort_order: 0, is_default: true},
        {id: 52, option_id: 41, label: 'Medium', sort_order: 1, is_default: false},
        {id: 53, option_id: 41, label: 'Large', sort_order: 2, is_default: false},

        {id: 54, option_id: 42, label: 'Long', sort_order: 0, is_default: false},
        {id: 55, option_id: 42, label: 'Short', sort_order: 0, is_default: false},

        {id: 56, option_id: 43, label: 'Small', sort_order: 2, is_default: false},
        {id: 57, option_id: 43, label: 'Medium', sort_order: 1, is_default: false},
        {id: 58, option_id: 43, label: 'Large', sort_order: 0, is_default: true},
    ], {})
   
    //   return Promise.resolve();
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('option_values', null, {trunecate: true});
  }
};

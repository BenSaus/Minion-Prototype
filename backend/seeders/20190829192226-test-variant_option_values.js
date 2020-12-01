'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('variant_option_values', [
        {id: 91, variant_id: 71, option_value_id: 51},
        {id: 92, variant_id: 71, option_value_id: 55},
        {id: 93, variant_id: 72, option_value_id: 51},
        {id: 94, variant_id: 72, option_value_id: 54},
        {id: 95, variant_id: 73, option_value_id: 52},
        {id: 96, variant_id: 73, option_value_id: 55},
        {id: 97, variant_id: 74, option_value_id: 52},
        {id: 98, variant_id: 74, option_value_id: 54},
        {id: 99, variant_id: 75, option_value_id: 53},
        {id: 10, variant_id: 75, option_value_id: 55},
        {id: 11, variant_id: 76, option_value_id: 52},
        {id: 12, variant_id: 76, option_value_id: 54},
        
        {id: 13, variant_id: 77, option_value_id: 56},
        {id: 14, variant_id: 78, option_value_id: 57},
        {id: 15, variant_id: 79, option_value_id: 58},
    ], {});


  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('variant_option_values', null, {trunecate: true});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('addresses', [
        {id: 512, first_name: 'Ben', last_name: 'Franklin', street_1: '343 Lakke Drive', street_2: '', city: 'Belgrade', state: 'MT', zip: '59718', country: 'USA'},
        {id: 513, first_name: 'Brenda', last_name: 'Sens', street_1: '222 Me Drive', street_2: 'Apt 2', city: 'Bozeman', state: 'WY', zip: '69875', country: 'USA'},
        {id: 514, first_name: 'Frank', last_name: 'Kite', street_1: '10 S. Beach', street_2: '', city: 'Colorado Springs', state: 'WA', zip: '99858', country: 'USA'},
    ], {});

  },

  down: (queryInterface, Sequelize) => {

  }
};

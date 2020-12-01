'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [
        {id: 61, first_name: 'Ben', last_name: 'Franklin', email: 'franklin@gmail.com', phone: '4052242234', accepts_marketing: true},
        {id: 62, first_name: 'Bob', last_name: 'Sirana', email: 'bob@dfs.com', phone: '4052242234', accepts_marketing: true},
        {id: 63, first_name: 'Brenda', last_name: 'Sens', email: 'sens.bl@gmail.com', phone: '4052242234', accepts_marketing: true},

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('customers', null, {trunecate: true});
  }
};

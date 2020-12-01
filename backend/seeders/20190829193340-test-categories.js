'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
        {id: 0, parent_id: null, name: 'Necklaces', sort_order: 0, is_visible: true, image_url: null},
        {id: 1, parent_id: null, name: 'Earrings', sort_order: 1, is_visible: true, image_url: null},
        {id: 2, parent_id: null, name: 'Bracelets', sort_order: 2, is_visible: true, image_url: null},
        {id: 3, parent_id: null, name: 'Rings', sort_order: 3, is_visible: true, image_url: null},
        {id: 4, parent_id: null, name: 'New', sort_order: 4, is_visible: false, image_url: null},
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('categories', null, {trunecate: true});
  }
};

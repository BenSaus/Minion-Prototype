'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    const products = [
        {id: 1, slug: 'sunrise-necklace', sku: 'RN-Sunrise', name: 'Sunrise Necklace', commodity_type: 'physical', manage_stock: true, inventory: 5, price: 3200, visible: true, featured: false},
        {id: 2, slug: 'other-necklace', sku: 'RN-Other', name: 'Other Necklace', commodity_type: 'physical', manage_stock: true, inventory: 2, price: 3600, visible: true, featured: true},
        {id: 3, slug: 'simple-earrings', sku: 'RE-Simple', name: 'Simple Earrings', commodity_type: 'physical', manage_stock: true, inventory: 2, price: 3900, visible: false, featured: false},
        {id: 4, slug: 'cascade-blossom', sku: 'RE-Cascade', name: 'Cascade Blossom', commodity_type: 'physical', manage_stock: true, inventory: 1, price: 3100, visible: true, featured: true},
        {id: 5, slug: 'falling-petals', sku: 'RE-FallPetal', name: 'Falling Petals', commodity_type: 'physical', manage_stock: true, inventory: 0, price: 5400, visible: true, featured: false},
    ];

    // Add more data here

    return queryInterface.bulkInsert('products', products, {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('products', null, {trunecate: true});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('variants', [
        {id: 71, product_id: 1, slug: 'slug', sku: 'RN-Sunrise-Small-Short', name: 'Small-Short', purchasable: true, manage_stock: true, inventory: 5, price: 5000},
        {id: 72, product_id: 1, slug: 'slug', sku: 'RN-Sunrise-Small-Long', name: 'Small-Long', purchasable: true, manage_stock: true, inventory: 5, price: 5000},
        {id: 73, product_id: 1, slug: 'slug', sku: 'RN-Sunrise-Medium-Short', name: 'Medium-Short', purchasable: true, manage_stock: true, inventory: 5, price: 5000},
        {id: 74, product_id: 1, slug: 'slug', sku: 'RN-Sunrise-Medium-Long', name: 'Medium-Long', purchasable: true, manage_stock: true, inventory: 5, price: 5000},
        {id: 75, product_id: 1, slug: 'slug', sku: 'RN-Sunrise-Large-Short', name: 'Large-Short', purchasable: true, manage_stock: true, inventory: 5, price: 5000},
        {id: 76, product_id: 1, slug: 'slug', sku: 'RN-Sunrise-Large-Long', name: 'Large-Long', purchasable: true, manage_stock: true, inventory: 5, price: 5000},
        {id: 77, product_id: 2, slug: 'slug', sku: 'RN-Other-Small', name: 'Small', purchasable: true, manage_stock: true, inventory: 5, price: 5000},
        {id: 78, product_id: 2, slug: 'slug', sku: 'RN-Other-Medium', name: 'Medium', purchasable: true, manage_stock: true, inventory: 5, price: 5000},
        {id: 79, product_id: 2, slug: 'slug', sku: 'RN-Other-Large', name: 'Large', purchasable: true, manage_stock: true, inventory: 5, price: 5000},

        {id: 80, product_id: 3, slug: 'slug', sku: 'RN-Simple', name: '', purchasable: true, manage_stock: true, inventory: 0, price: 5000},
    ], {});


    return Promise.resolve();
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

   return queryInterface.bulkDelete('variants', null, {trunecate: true});
  }
};

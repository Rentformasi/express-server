'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        title: 'Sewa Penginapan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sewa Sarana Olahraga',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Paling Banyak Disewa',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {})
  }
};

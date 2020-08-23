'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Products', {
      fields: ['idSubCategory'],
      type: 'foreign key',
      name: 'foreign_key_idSubCategory',
      references: { //Required field
        table: 'SubCategories',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Products', 'foreign_key_idSubCategory')
  }
};

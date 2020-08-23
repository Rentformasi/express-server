'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('SubCategories', {
      fields: ['idCategory'],
      type: 'foreign key',
      name: 'foreign_key_idCategory',
      references: { //Required field
        table: 'Categories',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('SubCategories', 'foreign_key_idCategory')
  }
};

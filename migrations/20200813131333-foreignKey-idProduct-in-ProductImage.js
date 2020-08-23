'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('ProductImages', {
      fields: ['idProduct'],
      type: 'foreign key',
      name: 'foreign_key_idProduct',
      references: { //Required field
        table: 'Products',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('ProductImages', 'foreign_key_idProduct')
  }
};

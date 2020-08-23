'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Transactions', {
      fields: ['idCart'],
      type: 'foreign key',
      name: 'foreign_key_idCart',
      references: { //Required field
        table: 'Carts',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Transactions', 'foreign_key_idCart')
  }
};

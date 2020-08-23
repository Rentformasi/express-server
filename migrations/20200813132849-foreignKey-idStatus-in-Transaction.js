'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Transactions', {
      fields: ['idStatus'],
      type: 'foreign key',
      name: 'foreign_key_idStatus',
      references: { //Required field
        table: 'Statuses',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Transactions', 'foreign_key_idStatus')
  }
};

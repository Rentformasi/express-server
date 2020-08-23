'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('UserDetails', {
      fields: ['idUser'],
      type: 'foreign key',
      name: 'foreign_key_idUser',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('UserDetails', 'foreign_key_idUser')
  }
};

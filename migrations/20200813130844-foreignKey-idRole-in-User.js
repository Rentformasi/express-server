'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users', {
      fields: ['idRole'],
      type: 'foreign key',
      name: 'foreign_key_idRole',
      references: { //Required field
        table: 'Roles',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Users', 'foreign_key_idRole')
  }
};

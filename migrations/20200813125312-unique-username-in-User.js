'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users', {
      fields: ['username'],
      type: 'unique',
      name: 'unique_constraint_username'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Users', 'unique_constraint_username')
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users', {
      fields: ['phoneNumber'],
      type: 'unique',
      name: 'unique_constraint_phoneNumber'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Users', 'unique_constraint_phoneNumber')
  }
};

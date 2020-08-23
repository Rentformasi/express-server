'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Role is required'
        },
        notEmpty: {
          args: true,
          msg: 'Role is required'
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Role',
  });

  Role.associate = function(models) {
    Role.hasMany(models.User, { foreignKey: 'idRole' });
  };
  return Role;
};

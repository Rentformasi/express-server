'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Name is required'
        },
        notEmpty: {
          args: true,
          msg: 'Name is required'
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Status',
  });

  Status.associate = function(models) {
    Status.hasMany(models.Transaction, { foreignKey: 'idStatus' });
  };
  return Status;
};

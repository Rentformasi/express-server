'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserDetail = sequelize.define('UserDetail', {
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'ID User is required'
        },
        notEmpty: {
          args: true,
          msg: 'ID User is required'
        },
        isInt: {
          args: true,
          msg: 'ID User has to be an integer'
        }
      }
    },
    noKTP: DataTypes.STRING,
    imageKTP: DataTypes.TEXT,
    noNPWP: DataTypes.STRING,
    imageNPWP: DataTypes.TEXT,
    address: DataTypes.STRING,
    village: DataTypes.STRING,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    verify: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Verify status is required'
        },
        notEmpty: {
          args: true,
          msg: 'Verify status is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'UserDetail',
  });

  UserDetail.associate = function(models) {
    UserDetail.belongsTo(models.User, { foreignKey: 'idUser' });
  };
  return UserDetail;
};

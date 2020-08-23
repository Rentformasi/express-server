'use strict';
const {
  Model
} = require('sequelize');
const { BcryptHelper } = require('../helpers');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Transaction, { foreignKey: 'idUser'});
      User.hasOne(models.UserDetail, { foreignKey: 'idUser'});
      User.hasMany(models.Product, { foreignKey: 'idUser'});
      User.belongsTo(models.Role, { foreignKey: 'idRole' });
    }
  };
  User.init({
    idRole: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'ID Role is required'
        },
        notEmpty: {
          args: true,
          msg: 'ID Role is required'
        },
        isInt: {
          args: true,
          msg: 'ID Role has to be an integer'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Username is required'
        },
        notEmpty: {
          args: true,
          msg: 'Username is required'
        },
        len: {
          args: [6],
          msg: 'Username has minimal 6 characters'
        }
      }
    },
    firstName: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'First name only contains alphabeth'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'Last name only contains alphabeth'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Email is required'
        },
        notEmpty: {
          args: true,
          msg: 'Email is required'
        },
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Password is required'
        },
        notEmpty: {
          args: true,
          msg: 'Password is required'
        },
        len: {
          args: [6],
          msg: 'Password has minimum 6 characters'
        },
        isAlphanumeric: {
          args: true,
          msg: 'Password only contains alphabeth and numbers'
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      validate: {
        isValidPhoneNumber(value) {
          if (value) {
            const pattern = /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/g
            if (!pattern.test(value)) {
              throw new Error('Invalid phone number')
            }
          }
        }
      }
    },
  }, {
    sequelize,
    hooks: {
      beforeCreate(user, options) {
        const lastName = user.lastName
        if (!lastName) {
          user.lastName = user.firstName
        }
        user.password = BcryptHelper.hashingPassword(user.password)
      },
    },
    modelName: 'User',
  });
  return User;
};
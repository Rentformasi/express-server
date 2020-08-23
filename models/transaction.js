'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    idCart: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'ID Cart is required'
        },
        notEmpty: {
          args: true,
          msg: 'ID Cart is required'
        },
        isInt: {
          args: true,
          msg: 'ID Cart has to be an integer'
        }
      }
    },
    idStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'ID Status is required'
        },
        notEmpty: {
          args: true,
          msg: 'ID Status is required'
        },
        isInt: {
          args: true,
          msg: 'ID Status has to be an integer'
        }
      }
    },
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
    rentDate: {
      type:DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Rent date is required'
        },
        notEmpty: {
          args: true,
          msg: 'Rent date is required'
        },
      }
    },
    returnDate: {
      type:DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Return date is required'
        },
        notEmpty: {
          args: true,
          msg: 'Return date is required'
        },
      }
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Total is required'
        },
        notEmpty: {
          args: true,
          msg: 'Total is required'
        },
        isNumeric: {
          args: true,
          msg: 'Only accept number'
        },
        isInt: {
          args: true,
          msg: 'Only accept integer number'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Transaction',
  });

  Transaction.associate = function(models) {
    Transaction.belongsTo(models.Cart, { foreignKey: 'idCart'});
    Transaction.belongsTo(models.User, { foreignKey: 'idUser'});
    Transaction.belongsTo(models.Status, { foreignKey: 'idStatus'});
  };
  return Transaction;
};

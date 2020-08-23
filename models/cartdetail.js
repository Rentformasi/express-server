'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartDetail = sequelize.define('CartDetail', {
    chartId: {
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
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'ID Product is required'
        },
        notEmpty: {
          args: true,
          msg: 'ID Product is required'
        },
        isInt: {
          args: true,
          msg: 'ID Product has to be an integer'
        }
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Quantity is required'
        },
        notEmpty: {
          args: true,
          msg: 'Quantity is required'
        },
        isNumeric: {
          args: true,
          msg: 'Quantity only contains number'
        },
        isGreaterThanZero(value) {
          if (value < 0) {
            throw new Error('Quantity minimal zero')
          }
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Price is required'
        },
        notEmpty: {
          args: true,
          msg: 'Price is required'
        },
        isNumeric: {
          args: true,
          msg: 'Price only contains number'
        },
        isGreaterThanZero(value) {
          if (!value) {
            throw new Error('Price has to be greater than zero')
          } else {
            if (value < 0) {
              throw new Error('Price has to be greater than zero')
            }
          }
        }
      }
    },
    total: DataTypes.INTEGER
  }, {
    sequelize,
    hooks: {
      beforeCreate(cartDetail, options) {
        cartDetail.total = cartDetail.price * cartDetail.quantity
      },
      beforeUpdate (cartDetail, options) {
        cartDetail.total = cartDetail.price * cartDetail.quantity
      }
    },
    modelName: 'CartDetail',
  });

  CartDetail.associate = function(models) {
    CartDetail.belongsTo(models.Cart, { foreignKey: 'idCart' });
    CartDetail.belongsTo(models.Product, { foreignKey: 'idProduct' });
  };
  return CartDetail;
};








'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartDetail extends Model {
    static associate(models) {
      CartDetail.belongsTo(models.Cart, { foreignKey: 'idCart' });
      CartDetail.belongsTo(models.Product, { foreignKey: 'idProduct' });
    }
  }
  CartDetail.init({
    chartId: {
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
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'ID Product is required'
        },
        notEmpty: {
          args: true,
          msg: 'ID Product is required'
        },
        isInt: {
          args: true,
          msg: 'ID Product has to be an integer'
        }
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Quantity is required'
        },
        notEmpty: {
          args: true,
          msg: 'Quantity is required'
        },
        isNumeric: {
          args: true,
          msg: 'Quantity only contains number'
        },
        isGreaterThanZero(value) {
          if (value < 0) {
            throw new Error('Quantity minimal zero')
          }
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Price is required'
        },
        notEmpty: {
          args: true,
          msg: 'Price is required'
        },
        isNumeric: {
          args: true,
          msg: 'Price only contains number'
        },
        isGreaterThanZero(value) {
          if (!value) {
            throw new Error('Price has to be greater than zero')
          } else {
            if (value < 0) {
              throw new Error('Price has to be greater than zero')
            }
          }
        }
      }
    },
    total: DataTypes.INTEGER
  }, {
    sequelize,
    hooks: {
      beforeCreate(cartDetail, options) {
        cartDetail.total = cartDetail.price * cartDetail.quantity
      },
      beforeUpdate (cartDetail, options) {
        cartDetail.total = cartDetail.price * cartDetail.quantity
      }
    },
    modelName: 'CartDetail',
  });
  return CartDetail;
};

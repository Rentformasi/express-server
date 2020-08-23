'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    status: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Status is required'
        },
        notEmpty: {
          args: true,
          msg: 'Status is required'
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });

  Cart.associate = function(models) {
    Cart.hasMany(models.CartDetail, { foreignKey: 'idCart' });
    Cart.hasMany(models.Transaction, { foreignKey: 'idCart' });
  };
  return Cart;
};

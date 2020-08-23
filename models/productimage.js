'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductImage = sequelize.define('ProductImage', {
    idProduct: {
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
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Title is required'
        },
        notEmpty: {
          args: true,
          msg: 'Title is required'
        },
      }
    },
    url: {
      type:DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Link url is required'
        },
        notEmpty: {
          args: true,
          msg: 'Link url is required'
        },
      }
    },
    deleteHash: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductImage',
  });
  
  ProductImage.associate = function(models) {
    ProductImage.belongsTo(models.Product, { foreignKey: 'idProduct' });
  };
  return ProductImage;
};

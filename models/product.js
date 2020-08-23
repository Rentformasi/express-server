'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    idSubCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'ID SubCategory is required'
        },
        notEmpty: {
          args: true,
          msg: 'ID SubCategory is required'
        },
        isInt: {
          args: true,
          msg: 'ID SubCategory has to be an integer'
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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Title is required'
        },
        notEmpty: {
          args: true,
          msg: 'Title is required'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Description is required'
        },
        notEmpty: {
          args: true,
          msg: 'Description is required'
        }
      }
    },
    specification: DataTypes.STRING,
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Stock is required'
        },
        notEmpty: {
          args: true,
          msg: 'Stock is required'
        },
        isNumeric: {
          args: true,
          msg: 'Stock only contains number'
        },
        isGreaterThanZero(value) {
          if (value < 0) {
            throw new Error('Stock minimal zero')
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
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  
  Product.associate = function(models) {
    Product.belongsTo(models.User, { foreignKey: 'idUser' });
    Product.belongsTo(models.SubCategory, { foreignKey: 'idSubCategory' });
    Product.hasMany(models.ProductImage, { foreignKey: 'idProduct' });
    Product.hasMany(models.CartDetail, { foreignKey: 'idProduct' });
  };
  return Product;
};

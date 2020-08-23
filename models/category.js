'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
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
    }
  }, {
    sequelize,
    modelName: 'Category',
  });

  Category.associate = function(models) {
    Category.hasMany(models.SubCategory, { foreignKey: 'idCategory', as: 'subCategories' });
  };
  return Category;
};

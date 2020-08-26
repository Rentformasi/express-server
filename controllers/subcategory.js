const { SubCategory, Products } = require('../models');
const { Op } = require('sequelize');
const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;
const pluralize = require('pluralize');

class SubCategoryController  {
  static addSubCategory(req, res, next) {
    
  }

  static getSubCategories(req, res, next) {

  }

  static findOneSubCategory(req, res, next) {

  }

  static findOneSubCategoryIncludeProducts(req, res, next) {
    
  }

  static editSubCategory(req, res, next) {
    
  }

  static deleteSubCategory(req, res, next) {
    
  }
}

module.exports = SubCategoryController;

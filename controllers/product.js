const { Product, Category, SubCategory } = require('../models');
const { Op } = require('sequelize');
const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;
const pluralize = require('pluralize');

class ProductController {

  static addProduct(req, res, next) {
    
  }

  static deleteProduct(req, res, next) {
    
  }

  static editProduct(req, res, next) {
    
  }

  static uploadImage(files, product) {
    
  }

  static findProductByCategory (req, res, next) {
    
  }

  static findProductBySubCategory (req, res, next) {
    
  }

  static getProducts(req, res, next) {
    
  }

  static findOneProduct(req, res, next) {
    
  }

  // categories
  static findCategories(req, res, next) {
    const id = +req.params.id
    Category.findOne({
      where: {
        id
      },
      include: SubCategory
    })
      .then(data => {
        if (data) {
          res.status(200).json(data);
        } else {
          next({
            status: 404,
            name: 'NotFound',
            message: 'Category is not found with id ' + id
          });
        }
      })
      .catch(err => next(err));
  }

  static getCategories(req, res, next) {
    let { filter, sort, include, page } = req.query;
    let paramQuerySQL = {};

    // jsonapi filtering - [title]
    if (filter != '' && typeof filter !== 'undefined') {
      let query = filter.title.split(',').map(function(item) {
        return {
          [Op.iLike]: '%' + item + '%'
        }
      });

      paramQuerySQL.where = {
        title: { [Op.or]: query }
      }
    }

    // jsonapi sorting
    if (sort != '' && typeof sort !== 'undefined') {
      let query = sort.split(',');
      query = query.map(function(item) {
        if (item.charAt(0) !== '-') {
          return [
            [item, 'ASC']
          ]
        } else {
          return [
            [item.replace('-', ''), 'DESC']
          ]
        }
      });

      paramQuerySQL.order = query;
    }

    // jsonapi including - [subcategories]
    if (include != '' && typeof include !== 'undefined') {
      let query = include.split(',');
      query.forEach(item => {
        if (pluralize.singular(item) === 'subcategory' || pluralize.plural(item) === 'subcategories') {
          paramQuerySQL.include = {
            model: SubCategory,
            as: 'subCategories'
          }
        }
      });
    }

    // jsonapi pagination
    if (page != '' && typeof page !== 'undefined') {
      if (page.offset != '' && typeof page.offset !== 'undefined' && page.offset > 0) {
        paramQuerySQL.offset = parseInt(page.offset) || 0;
      }

      if (page.limit != '' && typeof page.limit !== 'undefined' && page.limit > 0) {
        paramQuerySQL.limit = parseInt(page.limit) || 5;
      }
    }
    
    // sequelize
    Category.findAndCountAll(paramQuerySQL)
      .then(response => {
        var jsonapi = new JSONAPISerializer('categories', {
          pluralizeType: true,
          keyForAttribute: 'camelCase',
          attributes: ['title', 'subCategories'],
          subCategories: {
            ref: 'id',
            attributes: ['title', 'image'],
            includedLinks: {
              self: function (record, current) {
                return `http://localhost:3000/subcategories/${current.id}`;
              }
            },
            relationshipLinks: {
              related: function (record, current, parent) {
                return `http://localhost:3000/products/categories/${parent.id}/subcategories/`;
              }
            }
          },
          topLevelLinks: {
            self: function(data) {
              return `http://localhost:3000/products/categories?page[offset]=${page.offset}&page[limit]=${page.limit}`;
            },
            first: function(data) {
              return `http://localhost:3000/products/categories?page[offset]=${0}&page[limit]=${page.limit}`;
            },
            prev: function(data) {
              if (parseInt(page.offset) <= 0) {
                return null;
              } else {
                let prev = parseInt(page.offset) - parseInt(page.limit);
                if (prev < response.count) {
                  return null;
                }
                return `http://localhost:3000/products/categories?page[offset]=${prev}&page[limit]=${page.limit}`;
              }
            },
            next: function(data) {
              if (parseInt(page.offset) >= response.count) {
                return null;
              } else {
                let next = parseInt(page.offset) + parseInt(page.limit);
                if (next > response.count) {
                  return null;
                }
                return `http://localhost:3000/products/categories?page[offset]=${next}&page[limit]=${page.limit}`;
              }
            },
            last: function(data) {
              return `http://localhost:3000/products/categories?page[offset]=${response.count}&page[limit]=${page.limit}`;
            }
          }
        }).serialize(response.rows);
        res.status(200).json(jsonapi);
      })
      .catch(err => next(err));
  }
}

module.exports = ProductController;

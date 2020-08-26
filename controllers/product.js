const { Product, Category, SubCategory } = require('../models');
const { Op } = require('sequelize');
const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;
const pluralize = require('pluralize');


// pagination
const getPagination = (number, size) => {
  const limit = size ? +size : 3;
  const offset = number ? number * limit : 0;

  return { limit, offset };
};

const getPagingData = (response, number, limit) => {
  const { count: totalItems, rows: data } = response;
  const currentPage = number ? +number : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, data, totalPages, currentPage };
};

class ProductController  {

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
    let limit, offset;

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

      if (page.size != '' && typeof page.size !== 'undefined') {
        limit = page.size;
        paramQuerySQL.limit = limit;
      }

      if (page.number != '' && typeof page.number !== 'undefined') {
        offset = (page.number * limit) - limit;
        paramQuerySQL.offset = offset;
      }
    } else {
      limit = 5;
      offset = 0;
      paramQuerySQL.limit = limit;
      paramQuerySQL.offset = offset;
    }
    
    // sequelize
    Category.findAndCountAll(paramQuerySQL)
      .then(response => {
        let currentPage, totalPages, jsonapi;
        if (page != '' && typeof page !== 'undefined' && page.number != '' && typeof page.number !== 'undefined') {
          currentPage = page.number ? +page.number : 0;
          totalPages = Math.ceil(response.count / limit);

          jsonapi = new JSONAPISerializer('categories', {
            pluralizeType: true,
            keyForAttribute: 'camelCase',
            attributes: ['title', 'subCategories'],
            subCategories: {
              ref: 'id',
              attributes: ['title', 'image'],
              includedLinks: {
                self: function (record, current) {
                  return `${process.env.BASE_URL}/subcategories/${current.id}`;
                }
              },
              relationshipLinks: {
                related: function (record, current, parent) {
                  return `${process.env.BASE_URL}/products/categories/${parent.id}/subcategories/`;
                }
              }
            },
            topLevelLinks: {
              self: function() {
                return `${process.env.BASE_URL}/products/categories?page[number]=${currentPage}&page[size]=${limit}`;
              },
              first: function() {
                return `${process.env.BASE_URL}/products/categories?page[number]=${1}&page[size]=${limit}`;
              },
              prev: function() {
                if (parseInt(currentPage) <= 1) {
                  return null;
                } else {
                  return `${process.env.BASE_URL}/products/categories?page[number]=${currentPage-1}&page[size]=${limit}`;
                }
              },
              next: function() {
                if (parseInt(currentPage) >= totalPages) {
                  return null;
                } else {
                  return `${process.env.BASE_URL}/products/categories?page[number]=${currentPage+1}&page[size]=${limit}`;
                }
              },
              last: function() {
                return `${process.env.BASE_URL}/products/categories?page[number]=${totalPages}&page[size]=${limit}`;
              }
            }
          }).serialize(response.rows);
        } else {
          jsonapi = new JSONAPISerializer('categories', {
            pluralizeType: true,
            keyForAttribute: 'camelCase',
            attributes: ['title', 'subCategories'],
            subCategories: {
              ref: 'id',
              attributes: ['title', 'image'],
              includedLinks: {
                self: function (record, current) {
                  return `${process.env.BASE_URL}/subcategories/${current.id}`;
                }
              },
              relationshipLinks: {
                related: function (record, current, parent) {
                  return `${process.env.BASE_URL}/products/categories/${parent.id}/subcategories/`;
                }
              }
            }
          }).serialize(response.rows);
        }

        
        res.status(200).json(jsonapi);
      })
      .catch(err => next(err));
  }
}

module.exports = ProductController;

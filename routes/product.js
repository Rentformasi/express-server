const router = require('express').Router();
const { ProductController } = require('../controllers');

router.get('/categories', ProductController.getCategories);
router.get('/categories/:id', ProductController.findCategories);
// router.get('/categories/:id/subcategories', ProductController.findCategory);
// router.get('/categories/:idCategory/subcategories/:idSubCategory', ProductController.findCategory);

router.get('/', ProductController.getProducts);
router.get('/:id', ProductController.findOneProduct);

module.exports = router;

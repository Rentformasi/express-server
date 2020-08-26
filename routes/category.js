const router = require('express').Router();
const { CategoryController } = require('../controllers');

router.post('/', CategoryController.addCategory);
router.get('/', CategoryController.getCategories);
router.get('/:id', CategoryController.findOneCategory);
router.get('/:id/subcategories', CategoryController.findOneCategoryIncludeSubCategories);
router.patch('/:id', CategoryController.editCategory);
router.delete('/:id', CategoryController.deleteCategory);

module.exports = router;

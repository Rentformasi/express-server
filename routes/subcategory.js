const router = require('express').Router();
const { SubCategoryController } = require('../controllers');

router.post('/', SubCategoryController.addSubCategory);
router.get('/', SubCategoryController.getSubCategories);
router.get('/:id', SubCategoryController.findOneSubCategory);
router.get('/:id/products', SubCategoryController.findOneSubCategoryIncludeProducts);
router.patch('/:id', SubCategoryController.editSubCategory);
router.delete('/:id', SubCategoryController.deleteSubCategory);

module.exports = router;

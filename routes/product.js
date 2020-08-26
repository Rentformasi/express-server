const router = require('express').Router();
const { ProductController } = require('../controllers');

router.post('/', ProductController.addProduct);
router.get('/', ProductController.getProducts);
router.get('/:id', ProductController.findOneProduct);
router.patch('/:id', ProductController.editProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;

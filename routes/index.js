const router = require('express').Router();
const userRoutes = require('./user');
const productRoutes = require('./product');

router.get('/', (req,res) => {
  res.send('Welcome to Rentformasi API');
})
router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router;

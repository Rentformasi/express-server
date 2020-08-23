const router = require('express').Router();
const { UserController } = require('../controllers');
const { isAuthenticated } = require('../middlewares');

router.post('/login', UserController.login);
router.post('/register', UserController.register);

router.use(isAuthenticated);
router.get('/', UserController.findOne);

module.exports = router;

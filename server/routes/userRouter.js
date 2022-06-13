const Router = require('express');
const userController = require('../controllers/userController');
const { check } = require('express-validator');
const router = new Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post(
  '/registration',
  [
    check('email', 'Incorrect email').isEmail(),
    check(
      'password',
      'Password must be longer than 6 and shorter than 12'
    ).isLength({ min: 6, max: 12 }),
  ],
  userController.registration
);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);

module.exports = router;

const { User, Role } = require('../models');
const { BcryptHelper, JWTHelper } = require('../helpers');

class UserController {
  static login(req, res, next) {
    const input = {
      email: req.body.email,
      password: req.body.password
    }

    User.findOne({
      include: {
        model: Role
      }
    })
      .then((user) => {
        if (user) {
          const isValid = BcryptHelper.validatePassword(input.password, user.password);
          if (isValid) {
            const payload = {
              id: user.id,
              email: user.email,
              username: user.username,
              role: user.Role
            }
            const access_token = JWTHelper.signToken(payload);
            res.status(200).json({
              access_token,
              message: 'Login success'
            });
          } else {
            next({
              status: 400,
              name: 'LoginFailed',
              error: 'Email / password is incorrect'
            });
          }
        } else {
          next({
            status: 400,
            name: 'LoginFailed',
            error: 'Email / password is incorrect'
          });
        }
      }).catch((err) => {
        next(err);
      });
  }

  static findOne(req, res, next) {
    const id = req.decoded
    User.findOne({
      include: [
      {
        model: Cart,
        where: {
          status: false
        },
        required: false,
      }],
      where: {
        id
      }
    })
    .then(user => {
      res.status(200).json({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        cart: user.Carts,
        phoneNumber: user.phoneNumber
      });
    })
    .catch(err => {
      next(err);
    })
  }

  static register(req, res, next) {
   const input = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    idRole: 3
   }
   User.create(input)
   .then(newUser => {
    res.status(201).json({
      id: newUser.id,
      email: newUser.email,
      username: newUser.username,
      message: 'User created'
    });
   })
   .catch(err => {
     next(err);
   })
  }
}

module.exports = UserController;

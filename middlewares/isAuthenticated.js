const jwt = require('jsonwebtoken');
const { User } = require('../models');

const isAuthenticated = (req, res, next) => {
  const authentication = req.headers.access_token;
  if (authentication) {
    let token = authentication.split(' ')[1];
    if (token) {
      try {
        let decoded = jwt.verify(token, process.env.SECRET);
        User.findOne({
          where: {
            id: decoded.id
          }
        })
          .then(user => {
            if (user) {
              req.decoded = decoded.id;
              next();
            } else {
              next({
                status: 401,
                name: 'Unauthorized',
                message: 'Please register first'
              });
            }
          })
          .catch(error => {
            next(error);
          })
      } catch (error) {
        next(error);
      }
    } else {
      next({
        status: 400,
        name: 'LoginFailed',
        error: 'Please login first'
      });
    }
  } else {
    next({
      status: 400,
      name: 'LoginFailed',
      error: 'Please login first'
    });
  }
}

module.exports = isAuthenticated;
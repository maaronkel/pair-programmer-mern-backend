const { check, validationResult } = require('express-validator');

const validateUser = () => {
  [
    check('email', 'Please include a valid email').isEmail(), 
    check('password', 'Password is required').exists()
  ]
}

module.exports = validateUser;
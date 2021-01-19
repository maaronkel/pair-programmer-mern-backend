const express = require('express');
const router = express.Router();

const validateUser = require('../middleware/users');
const { loginUser, registerUser, logoutUser } = require('../controllers/users');

// @route       /api/users/login
// @desc        Login as a user
router.post('/login', validateUser, loginUser);

// @route       /api/users/register
// @desc        Register a user and log them in using passport
router.post('/register', registerUser);

// @route       /api/users/logout
// @desc        Logout
router.get('/logout', logoutUser);

module.exports = router;
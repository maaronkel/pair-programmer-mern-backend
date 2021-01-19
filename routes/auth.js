const express = require('express');
const router = express.Router();

const ensureAuthenticated = require('../middleware/auth');
const findUser = require('../controllers/auth');

// @route       /api/auth
// @desc        Get the user logged in on the backend
router.get('/', ensureAuthenticated, findUser);

module.exports = router;
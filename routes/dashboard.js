const express = require('express');

const { getDashboard } = require('../controllers/dashboard.js');

const router = express.Router();

router.get('/', getDashboard);

module.exports = router;
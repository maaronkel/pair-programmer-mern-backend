const express = require('express');
const router = express.Router();

const { getMyProfile } = require('../controllers/userProfiles');

// @route       /api/profiles/me
// @desc        Get the profile that is linked to the logged-in user
router.get('/me', getMyProfile);

module.exports = router;
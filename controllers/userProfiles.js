const User = require('../models/Users');
const Profile = require('../models/UserProfile');


const getMyProfile = async (req, res) => {
   try {
      const myProfile = await Profile.findOne({ user: req.user.id }).populate('user', ['firstname', 'lastname']);
      res.status(200).send(myProfile);
   } catch (err) {
      res.status(500).send(err)
   }
}

module.exports = { getMyProfile };
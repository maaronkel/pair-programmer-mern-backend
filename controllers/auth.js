const User = require('../models/Users');

const findUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    console.log('The user is authentiated so we are going to send them to the frontend');
    res.json(user)
  } catch (error) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}

module.exports = findUser;
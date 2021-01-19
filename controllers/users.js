const bcrypt = require('bcryptjs');
const passport = require('passport');
const { check, validationResult } = require('express-validator');

const Profile = require('../models/UserProfile');
const User = require('../models/Users');

const loginUser = async (req, res) => {

   const errors = validationResult(req);

   if (!errors.isEmpty()) {
      console.log('These are the errors', errors.array());
   return res.status(400).json({ errors: errors.array() })
   }

   // Passport is authenticating the user
   passport.authenticate('local', (err, user, info) => {
    if (err) { res.status(500).send(err) }  // server error (eg. cant fetch data)
    else if (info) { return res.send(info) }  // login error messages from the local strategy (email not registered or password invalid)
   else {
      req.login(user, (err) => {
        if (err) { return res.status(500).send(err) }  // is this a different error to the 500 above?
      });
      return res.status(200).json(req.user);
   }
   })(req, res)
}

const registerUser = async (req, res) => {

   const { firstname, lastname, email, password, institutename, institutelocation } = req.body;

   try {
      let user = await User.findOne({ email });

      if (user) {
         return res.status(400).send('This user already exists');
      }
      
      const hash = await bcrypt.hash(password, 10);
      user = new User(req.body);
      user.password = hash;
      await user.save()
      
      req.login(user, (err) => {
         if (err) {
            return res.status(404).send('error');
         } else {
            return res.status(200).send(user);
         }
      })
   } catch (err) {
      res.status(500).send('Server error');
   }
}

const logoutUser = async (req, res) => {
   req.logout();
   res.status(200).send('logged out');
}

module.exports = { loginUser, registerUser, logoutUser };
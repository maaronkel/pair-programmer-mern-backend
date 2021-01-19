const UserModel = require("../models/user");
const passport = require('passport');

export const getDashboard = async (req, res) => {
   try {
      res.status(200).json();
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
}
const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    about: String
});

module.exports = mongoose.model('UserProfile', profileSchema);
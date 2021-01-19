const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    institute: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institute'
    },
    userProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile'
    },
    isTeacher: { 
        type: Boolean, 
        default: true 
    },
});

module.exports =  mongoose.model('Users', userSchema);
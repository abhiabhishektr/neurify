import mongoose from 'mongoose'

// define the User model schema
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('User', UserSchema);
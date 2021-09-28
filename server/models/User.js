const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newUser = new Schema({
    email: {
        type: String,
        unique: true,
    },
    username: {
        type: String,
        unique: true,
        min: 6,
        required: true
    },
    password: {
        type: String,
        min: 8,
        required: true
    },
    
});

// const userCoins = new Schema({
//     username: {
//         type: String,
//         min: 6,
//         required: true
//     },
//     coinId: {
//         type: String,
//         required: true
//     },
    
// });


const User = mongoose.model('User', newUser);

module.exports = User;
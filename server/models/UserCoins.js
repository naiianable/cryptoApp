const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userCoin = new Schema({
    name: {
        type: String,
        unique: true,
    },
    amount: {
        type: Number
    }
    
});

const Coin = mongoose.model('UserCoins', userCoin);

module.exports = Coin;
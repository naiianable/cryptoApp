const { check, validationResult } = require('express-validator');
let User = require('../models/User');

let validationBodyRules = [

    check('username', 'Username Invalid')
    .trim()
    .isAlphanumeric()
    .isLength({ min: 6 })
    .custom((value, { req }) => {
        User.findOne({ username: value })
        //console.log(value)
        .then(user => {
            console.log('THIS IS USER', user)
            if(!user) {
                return Promise.reject('Error: Username/Password Invalid');
            }
        });
    })


];

module.exports = validationBodyRules;
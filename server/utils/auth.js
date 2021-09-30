const { body, validationResult } = require('express-validator');
let User = require('../models/User');

exports.login = [

    body('username', 'Username Invalid')
    .trim()
    .isAlphanumeric()
    .isLength({ min: 6 })
    .custom((value) => {
        return User.findOne({ username: value })
        .then(user => {
            if(!user) {
                return Promise.reject('Username does not exist');
            } 
        })

    }),

    body('password', 'Password Invalid')
    .trim()
    .isAlphanumeric()
    .isLength({ min: 8 })
    
];


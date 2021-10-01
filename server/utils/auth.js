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

exports.register = [

    body('email', 'Invalid Email')
    .trim()
    .isEmail(),


    body('username', 'Username must be at least 6 characters')
    .trim()
    .isAlphanumeric()
    .isLength({ min: 6 })
    .custom(value => {
        return User.findOne({ username: value })
        .then(user => {
            if(user) {
                return Promise.reject('Username Already Exists');
            } 
        })

    }),

    body('password', 'Invalid Password')
    .trim()
    .isAlphanumeric()
    .isLength({ min: 8 })
    .custom((value, { req }) => {
        let repeatPass = req.body.repeatPassword;
        if(value !== repeatPass) {
            throw new Error('Passwords do not match');
        } else {
            return value;
        }
    })
    
];


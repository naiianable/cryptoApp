const env = process.env.NODE_ENV || 'development';
require('dotenv').config();

const config = {
    development: {
        port: process.env.PORT || 3333,
        dbURL: `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@userdata.dz6ez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        authCookieName: 'x-auth-token'
    },
    production: {}
    
};

module.exports = config[env];
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

module.exports = (app) => {

    app.use(
        cors({
            origin: `http://192.168.1.102:3001`
        }))

    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(cookieParser());
}


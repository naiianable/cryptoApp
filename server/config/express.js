const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

module.exports = (app) => {

    app.use(
        cors({
            origin: `http://localhost:3000`,
        }))

    // app.use((req, res, next) => {
    //     res.setHeader('Access-Control-Allow-Credentials', true)
    // })

    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(bodyParser.json());

    app.use(cookieParser());
}


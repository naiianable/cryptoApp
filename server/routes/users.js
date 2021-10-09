const router = require('express').Router();
const controllers = require('../controllers/')
const auth = require('../utils/auth');

    router.post('/register', auth.register, controllers.user.post.register);

    router.post('/login', auth.login, controllers.user.post.login);

    router.post('/coins', controllers.user.post.coins);

    router.post('/list', controllers.user.post.list);

    module.exports = router;

    
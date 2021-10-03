// let user = import('../controllers/user/');
const axios = require('axios');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../utils/auth');
const { check, validationResult } = require('express-validator');

require('dotenv').config(); 

module.exports = (app) => {


    app.get('/coins', (req, res) => {
      
      console.log('this is /coins')
      res.send('Hello World')

      // var config = {
      //   method: 'get',
      //   url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h',
      //   headers: { 
      //     'Content-Type': 'application/json'
      //   }
      // };

      // axios(config)
      // .then((response) => res.send(response.data))
      // .catch(function (error) {
      //   console.log(error);
      // });
    });

    

    app.post('/register', auth.register, (req, res, next) => {
      let {  email, username, password } = req.body;
      // console.log(username);
      // console.log(password);
      let errors = validationResult(req);

      if(!errors.isEmpty()) {
        console.log('THESE ARE THE ERRORS', errors)
        let errorMsg = errors.errors[0].msg;

        res.send({ errorMsg });

      } else {
        bcrypt.hash(password, +process.env.SALTROUNDS, function(err, hash) {
        //console.log('THIS IS HASHED PASS', hash);
        password = hash

        User.create({ email, username, password })
          .then((createdUser) => {
            let userCreated;
              console.log('THIS IS CREATED USER', createdUser);
              // console.log(createdUser.password);
              // had to send userCreated for react side to push properly
              res.send({ userCreated })

          })
          .catch((err) => console.log(err))
        });

      }
      
      

    });

    app.post('/login', auth.login, async (req, res) => {
      let { username, password } = req.body;
      let loggedIn;
      let errors = validationResult(req)
      // console.log(errors)

      if(!errors.isEmpty()) {
        let errorMsg = errors.errors[0].msg
        console.log('THIS IS THE ERROR MSG', errorMsg)
        console.log('THESE ARE ERRORS', errors)
        
        res.send({ errorMsg });
      } else {
        let userData = await User.findOne({ username: username })
          //console.log(userData);
          let userId = userData._id;
          let userPass = userData.password

          bcrypt.compare(password, userData.password)
          .then((result) => {
            if(result) {
              let payload = ({ userId, userPass });
              let options = { expiresIn: '1hr' };

              let token = jwt.sign(payload, process.env.SECRET, options);
              

              res.send({ token, loggedIn });
              //console.log('THIS IS TOKEN', token)
            } else {
                res.send({ errorMsg: 'Invalid Password' });

            };
          })
          .catch((err) => console.log(err));

      };

    });
      
    app.post('/coins', async (req, res) => {

      let token = req.body.user;
      let decoded = jwt.verify(token, process.env.SECRET)

      let newCoin = req.body.id
      console.log('NEW COIN', newCoin)


      User.findById(decoded.userId, (err, user) => {

        let coinChecker = user.userCoins.filter(coin => coin.hasOwnProperty(newCoin));

        if(coinChecker.length === 0) {
          let coinObj = { [newCoin]: 0 }

          user.userCoins.push(coinObj)
          user.save((err, res) => {
            if(err) return console.error(err)
          });

        } else {
          // res.send('Already')
        }
        console.log('USER', user)
      })
      console.log('THIS IS THE REQ.BODY', req.body)
    });

    app.post('/list', (req, res) => {
     
      console.log('THIS IS REQ.BODY', req.body)
      let decoded = jwt.verify(req.body.token, process.env.SECRET)

      User.findById(decoded.userId)
      .then(user => {
        console.log(user)
        res.send(user.userCoins);
        
      })

      console.log('THE TOKEN', decoded)
    });

}
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



    app.post('/register', (req, res, next) => {
      let {  email, username, password } = req.body;
      // console.log(username);
      // console.log(password);
      
      bcrypt.hash(password, +process.env.SALTROUNDS, function(err, hash) {
        //console.log('THIS IS HASHED PASS', hash);
        password = hash

      User.create({ email, username, password })
        .then((createdUser) => {
            console.log('THIS IS CREATED USER', createdUser);
            console.log(createdUser.password);

          
            // const token = jwt.createToken({ id: createdUser._id, name:createdUser.username });
            
            // res.cookie(config.authCookieName, token, {httpOnly:true});
            // console.log('cookie was created');
            
            // const getName = jwt.verifyToken(token).then((response) => {
            //         let name = response.name;

            //         if(response.name !== ''){
            //             console.log(name); 
            //             res.send({token, name});   
            //         } else {
            //             res.send({token});
            //         }
            //     })
        })
        .catch((err) => console.log(err))
      })

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
            });

        };

      });
      

      

}
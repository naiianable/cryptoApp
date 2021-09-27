// let user = import('../controllers/user/');
const axios = require('axios');
const User = require('../models/User');
const jwt = require('jsonwebtoken')

module.exports = (app) => {

    app.get('/coins', (req, res) => {
      console.log('this is /coins')

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
      const { username, email, password } = req.body;
      console.log(req.body)
      // console.log(username);
      // console.log(password);
      User.create({ username, email, password })
          .then((createdUser) => {
              console.log(createdUser);
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
          .catch(next)
  })
    // app.get('/register', (req, res) => {
    //   console.log('THIS IS REGISTER GET');
    // });

    // app.post('/register', (req, res) => {

    //   console.log('THIS IS REGISTER POST');
    // })

    // app.get('/login', (req, res) => {
    //   console.log('This is login')
    // });


}
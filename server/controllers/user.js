const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

module.exports = {
    post: {
        register: (req, res, next) => {
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
        },

        login: async (req, res) => {
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
                    let options = { expiresIn: '1h' };
      
                    let token = jwt.sign(payload, process.env.SECRET, options);
                    
      
                    res.send({ token, loggedIn });
                    console.log('THIS IS TOKEN', token)
                  } else {
                      res.send({ errorMsg: 'Invalid Password' });
      
                  };
                })
                .catch((err) => console.log(err));
      
            };
      
        },

        coins: async (req, res) => {

            let token = req.body.user;
            let decoded = jwt.verify(token, process.env.SECRET)
      
            let newCoin = req.body.id
            //console.log('NEW COIN', newCoin)
      
      
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
        },

        list: (req, res) => {
        
            let decoded = jwt.verify(req.body.token, process.env.SECRET)
            
            let updatedArray = [];
      
              User.findById(decoded.userId, (err, user) => {
      
          //============================================================  
      
                if(req.body.type === 'onPageLoad') {
                  res.send(user.userCoins);
          //============================================================  
          
                } else if(req.body.type === 'delete') {
                    //edit userCoins based on id 
                  //console.log('THIS IS USER', user)
                    
                  //filter through usercoins and compare with key from req.body.id returned from delete click
                    updatedArray = user.userCoins.filter(coin => {
                      for(coinName in coin) { 
                        if(coinName !== req.body.id) {
                          updatedArray.push(coin)
                        };
                      };
                      user.userCoins = updatedArray;
                    });
      
                    user.save((err, result) => {
                      if(err) return console.log(err);
                      //console.log('THIS IS THE RESULT', result)
                      let userCoins = user.userCoins;
                      //console.log(userCoins)
                      res.send({ userCoins, statusMsg: `${req.body.id} deleted...`});
                    });
            //=========================================================
      
                } else if(req.body.type === 'update') { 
                    //figure out how to get coin id from target click in react
                    //search for coin in user db and update value with amount
                    //save user, return data
      
      
                      let newAmount = req.body.amount;
                      let coinsOfUser = user.userCoins
      
                      let newCoin;
                      let splicePosition;
      
                    //console.log('UPDATE REQ', req.body)
                      coinsOfUser.forEach((coin, index) => {
                        for(coinName in coin) {              
                          if(req.body.id === coinName) {
                            splicePosition = index;
                          };            
                        };
                          //console.log('HERES THE USER', user)
                      });
      
                      if(req.body.id && newAmount) {
                        newCoin = { [req.body.id]: +newAmount }
                      } else {
                        res.send({ errorMsg: 'Try again...' })
                        return
                      };
      
                      coinsOfUser.splice(splicePosition, 1, newCoin);
                    
                      user.save((err, result) => {
                        if(err) return console.log(err)
                        console.log('THIS IS THE SAVED USER', result)
                      });
                    res.send({coinsOfUser,  successMsg: 'Coin saved!' });
      
                };  
      
              });
      
      
          }


    }
}

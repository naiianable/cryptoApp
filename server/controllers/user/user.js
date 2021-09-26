// const models = require('../models');
// const config = require('../config/config');
// const utils = require('../utils');

// module.exports = {
//     get: (req, res, next) => {
//         let {_id} = req.body;
//         // console.log(req.body);
//         // console.log('thisIsTheUser req')
//         models.User.findOne({_id:_id})
//             .then((users) => {
//                 console.log(users);
//                 res.send(users);
//             }).catch(next);
//     },

//     post: {
//         register: (req, res, next) => {
//             const { name, email, password, date } = req.body;
//             // console.log(name);
//             // console.log(password);
//             models.User.create({ name, email, password, date })
//                 .then((createdUser) => {
//                     console.log(createdUser);
//                     const token = utils.jwt.createToken({ id: createdUser._id, name:createdUser.name });
                    
//                     res.cookie(config.authCookieName, token, {httpOnly:true});
//                     console.log('cookie was created');
                    
//                     const getName = utils.jwt.verifyToken(token).then((response) => {
//                             let name = response.name;

//                             if(response.name !== ''){
//                                 console.log(name); 
//                                 res.send({token, name});   
//                             } else {
//                                 res.send({token});
//                             }
//                         })
//                 })
//                 .catch(next)
//         },

//         login: (req, res, next) => {
//             const { email, password } = req.body;
//             console.log(req.body);
//             models.User.findOne({ email:email })
//                 .then((user) => Promise.all([user, user.matchPassword(password)]))
//                     .then(([user, match]) => {
//                         console.log(user);
//                         console.log(match);
//                         if(!match){
//                             console.log('wrong password');
//                             res.status(401);
//                             res.json(next)
                            
//                             return;
//                         }
//                         const token = utils.jwt.createToken({ id: user._id, name:user.name});
                        
//                         res.cookie(config.authCookieName, token, {httpOnly:true});
//                         console.log('cookie was created');
//                         console.log(token);
                        
//                         const getName = utils.jwt.verifyToken(token).then((response) => {
//                             let name = response.name;

//                             if(response.name !== ''){
//                                 console.log(name); 
//                                 res.send({token, name});   
//                             } else {
//                                 res.send({token});
//                             }
//                         })
                        
                        
//                     }).catch(next);
//         },

//         logout: (req, res, next) => {
//             const token = req.cookies[config.authCookieName];
//             console.log('-'.repeat(100));
//             console.log(token);
//             console.log('-'.repeat(100));
//             models.TokenBlacklist.create({ token })
//                 .then(() => {
//                     res.clearCookie(config.authCookieName).send('Logout successfully!');
//                 })
//                 .catch(next);
//         }
//     },

//     put: (req, res, next) => {
//         const id = req.params.id;
//         const { name, password } = req.body;
//         models.User.update({ _id: id }, { name, password })
//             .then((updatedUser) => res.send(updatedUser))
//             .catch(next)
//     },

//     delete: (req, res, next) => {
//         const id = req.params.id;
//         models.User.deleteOne({ _id: id })
//             .then((removedUser) => res.send(removedUser))
//             .catch(next)
//     }
// };
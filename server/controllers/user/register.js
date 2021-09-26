// exports.register = function(req, res) {
//     res.clearCookie('error')
//     let error = req.cookies.error;
    
//     if(!error) {
//         res.render('register');
//     } else {
//         let errorMsg = error.errors[0].msg;
//         console.log(error);
//         res.render('register', { errorMsg });
//    }
    
// };

// exports.postRegister = function(req, res) {

//     let userData = req.body;
//     let newUser = new User(userData);

//     const saltRounds = 9;
//     const myPlainTextPass = userData.password;

//     let errors = validationResult(req)
//     console.log(errors);

//     if(!errors.isEmpty()) {
//         console.log(errors);
//         res.cookie('error', errors);
//         res.redirect('register');
//     } else {
//         bcrypt.hash(myPlainTextPass, saltRounds, function(err, hash) {
//         newUser.password = hash;

//         newUser.save((err, user) => {
//             if(err) return console.error(err);
//         });
//         res.redirect('/login');     
//     });
        
//     }
    
// };
// let user = import('../controllers/user/');
const axios = require('axios');

module.exports = (app) => {

    // app.get('/', (req, res) => {
    //   // using mongoose model, find entries to db i want to show, returns json
    //     res.json({
    //       name: 'bob'
    //     })
    //   })

    //   app.post('/', (req, res) => {
    //     console.log('this is req.body', req.body)
    //     res.send('this is a post request')
    //   })

    // app.use('/coins') -----> app.get('/')   OR   app.get('/:id')

    app.get('/coins', (req, res) => {
      console.log('this is /coins')

      var config = {
        method: 'get',
        url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h',
        headers: { 
          'Content-Type': 'application/json'
        }
      };

      axios(config)
      .then(function (response) {
        //console.log('THIS IS RESPONSE.DATA', response.data)
        res.send(response.data)
      })
      .catch(function (error) {
        // console.log(error);
      });
    })

   
    //app.get('/', clearCookie, getController.getHome);

    // app.get('/login', user.login);

    // app.get('/register', user.register);

}
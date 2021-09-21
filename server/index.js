const express = require('express')
const mongoose = require('mongoose');
const app = express()

require('./config/routes')(app);
require('dotenv').config();
const port = process.env.PORT || 3333

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@userdata.dz6ez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected!');
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
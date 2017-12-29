var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
//and create our instances
var app = express();
//set our port to either a predetermined port number if you have set 
//it up, or 3001
var apiPort = process.env.API_PORT || 3031;
var router = express.Router();
require('./router')(app,router,bodyParser);

//starts the server and listens for requests
app.listen(apiPort, function() {
 console.log(`services running on port ${apiPort}`);
});
app.set('clientSecret',config.clientSecret);

/////
'use strict';
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

module.exports = function (app,router,bodyParser) {
    var getModelSchema = require('../model/mongoConnection');
    //now we should configure the API to use bodyParser and look for 
    //JSON data in the request body
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    //To prevent errors from Cross Origin Resource Sharing, we will set 
    //our headers to allow CORS with middleware like so:
    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
        //and remove cacheing so we get the most recent comments
        res.setHeader('Cache-Control', 'no-cache');
        // check header or url parameters or post parameters for token
        // var token = req.body.token || req.query.token || req.headers['x-access-token'];
        // // decode token
        // if (token) {
        //     // verifies secret and checks exp
        //     jwt.verify(token, app.get('clientSecret'), function(err, decoded) {
        //         if (err) {
        //             return res.json({
        //                 success: false,
        //                 message: 'Failed to authenticate token.'
        //             });
        //         } else {
        //             // if everything is good, save to request for use in other routes
        //             req.decoded = decoded;
        //             next();
        //         }
        //     });
        // } else {
        //     // if there is no token
        //     // return an error
        //     return res.status(403).send({
        //         success: false,
        //         message: 'No token provided.'
        //     });
        // }
        next();
    });
    mongoose.connect('mongodb://localhost/quartz');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:')); 
    db.once('open', function() { 
      console.log("connected to db"); 
    });

    var signUpModel = getModelSchema(mongoose,'signup');
    var appConfigModel = getModelSchema(mongoose,'appconfig');
    var companyInfoModel = getModelSchema(mongoose,'companyinfo');
    var userActivationModel = getModelSchema(mongoose,'useractivation');
    var userAreaInterestModel = getModelSchema(mongoose,'userareainterest');
    var userProfessionalInfoModel = getModelSchema(mongoose,'userprofessionalinfo');
    var userInfoModel = getModelSchema(mongoose,'userinfo');
    var userProfilePictureModel = getModelSchema(mongoose,'userprofilepicture');

    router.get('/api', function(req, res) {
        res.send({ message: 'API Initialized!'});
    });
    
    // router.post('/authenticate', function(req, res) {
    //             // find the user
    //     User.findOne({
    //         name: req.body.name
    //     }, function(err, user) {
    //         if (err) throw err;
    //         if (!user) {
    //             res.json({
    //                 success: false,
    //                 message: 'Authentication failed. User not found.'
    //             });
    //         } else if (user) {
    //             // check if password matches
    //             if (!user.validPassword(req.body.password)) {
    //                 res.json({
    //                     success: false,
    //                     message: 'Authentication failed. Wrong password.'
    //                 });
    //             } else {
    //                 // if user is found and password is right
    //                 // create a token
    //                 var token = jwt.sign(user, app.get('clientSecret'), {
    //                     expiresIn: 60 * 60 * 24 // expires in 24 hours
    //                 });

    //                 // return the information including token as JSON
    //                 res.json({
    //                     success: true,
    //                     message: 'Enjoy your token!',
    //                     token: token
    //                 });
    //             }
    //         }
    //     });
    // });

    router.post("/newUserSignUp", function(req, res){
        var reqBody = req.body;
        console.log("reqBody::::::>",reqBody);
        new signUpModel({
            invitationCode:reqBody.invitationCode,
            workEmail:reqBody.workEmail
        }).save(function(err,doc){
            if(err) res.send({ message: 'Unable to save user sign up' });
            else res.send({ message: 'New User Sighned Up' });
        });
    });

    //Use our router configuration when we call /api
    app.use('/quartzservice', router);
}
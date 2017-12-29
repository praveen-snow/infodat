'use strict';

module.exports = function (Schema,mongoose) {
    var accActivationSchema = new Schema({
        workEmail:String,
        passWord:String,
        userId:String,
        userSecurityQuestion:{
           question:String,
           answer:String
        }
    });
    return mongoose.model('useraccountactivations', accActivationSchema);
}
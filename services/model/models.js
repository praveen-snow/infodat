'use strict';

module.exports = function (mongoose,requestedSchema) {
    var Schema = mongoose.Schema;
    var requiredSchema = '';
    var model = '';
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log("connected to db");
    });
    var signUpSchema = new Schema({
        invitationCode:String,
        userFullName:{  
           firstName:String,
           lastName:String
        },
        workEmail:String,
        company:{  
           companyName:String,
           companyWebSite:String
        },
        job:{  
           jobFunction:String,
           jobTitle:String
        },
        userPhoneNumber:{  
           phoneNumber:String,
           ext:String
        },
        PreviousWorkEmail:String,
        userId:String
    });
    if(requestedSchema === 'signUp'){
        model = mongoose.model('adminInfo', signUpSchema);
    }
    return model;
}
'use strict';

module.exports = function (Schema,mongoose) {
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
        PreviousWorkEmail:String
    });
    return mongoose.model('admininfos', signUpSchema);
}
'use strict';

module.exports = function (mongoose,requestedSchema) {
    var Schema = mongoose.Schema;
    var requiredSchema = '';
    var model = '';
    if(requestedSchema === 'signup'){
        model = require('./signUp')(Schema,mongoose);
    }
    if(requestedSchema === 'appconfig'){
        model = require('./appConfig')(Schema,mongoose);
    }
    if(requestedSchema === 'companyinfo'){
        model = require('./companyInfo')(Schema,mongoose);
    }
    if(requestedSchema === 'useractivation'){
        model = require('./userActivation')(Schema,mongoose);
    }
    if(requestedSchema === 'userareainterest'){
        model = require('./userAreaInterest')(Schema,mongoose);
    }
    if(requestedSchema === 'userprofessionalinfo'){
        model = require('./userProfessionalInfo')(Schema,mongoose);
    }
    if(requestedSchema === 'userinfo'){
        model = require('./userInfo')(Schema,mongoose);
    }
    if(requestedSchema === 'userprofilepicture'){
        model = require('./userProfilePicture')(Schema,mongoose);
    }
    return model;
}
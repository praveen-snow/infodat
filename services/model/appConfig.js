'use strict';

module.exports = function (Schema,mongoose) {
    var appConfigSchema = new Schema({
        jobFunctionList:Array,
        securityQuestions:{
            questions:Array
        },
        bannedDomain:Array
    });
    return mongoose.model('appconfigs', appConfigSchema);
}
'use strict';

module.exports = function (Schema,mongoose) {
    var userProfessionalInfoSchema = new Schema({
        userId:String,
        workExperiance:Array
    });
    return mongoose.model('userprofessionalinfos', userProfessionalInfoSchema);
}
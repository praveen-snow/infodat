'use strict';

module.exports = function (Schema,mongoose) {
    var userProfilePictureSchema = new Schema({
        userId:String,
        profileImage:String,
        imageProperty:{
            zoom:Number,
            rotateAngle:Number,
        }
    });
    return mongoose.model('userprofilepicture', userProfilePictureSchema);
}
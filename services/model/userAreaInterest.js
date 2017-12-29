'use strict';

module.exports = function (Schema,mongoose) {
    var areaIntrestSchema = new Schema({
        userId:String,
        areaInterest:{
           selectedJobFunction:String,
           jobFunctionSubCategory:Array
        },
        moreInterest:{
            moreJobFunctions:Array
        }
    });
    return mongoose.model('userareainterests', areaIntrestSchema);
}

/** moreJobFunctions
 * this more job function is an array of object 
 * which has name of job function and sub category
 */
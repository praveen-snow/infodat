'use strict';

module.exports = function (Schema,mongoose) {
    var companySchema = new Schema({
        userId:String,
        company:{
           industry:String,
           revenue:String,
           employeeSise:String
        }
    });
    return mongoose.model('usercompanyinfos', companySchema);
}
'use strict';

module.exports = function (requestedSchema) {
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/quartz');
    var modelSchema = require('./models')(mongoose,requestedSchema);
    return modelSchema;
}
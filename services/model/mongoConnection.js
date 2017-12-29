'use strict';

module.exports = function (mongoose,requestedSchema) {
    var modelSchema = require('./models')(mongoose,requestedSchema);
    return modelSchema;
}
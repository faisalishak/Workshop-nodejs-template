var mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect("mongodb://localhost/workshopnode"); 
    require('../app/models/user');

    return db;
} 
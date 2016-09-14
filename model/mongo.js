var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/dbtest');
// create instance of Schema
var mongoSchema = mongoose.Schema;
// create schema
var userSchema  = {
    "nom" : String
};
// create model if not exists.
module.exports = mongoose.model('heroes',userSchema);
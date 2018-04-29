var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
// var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    first_name: String,
    last_name: String,
    username: String,
    password: String,
    phone: String,
    address: String,
    height: String,
    weight: String,
    blood_pressure: String,
    admin:   {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);


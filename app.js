var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var mongoose = require('./config/mongoose');

var app = express();
var db = mongoose();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:true}));

app.use(session({secret: 'f', resave:true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./app/routes/user.js')(app);

module.exports = app;


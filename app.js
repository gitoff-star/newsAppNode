var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var newsRouter = require('./routes/news');
var userRouter = require('./routes/user');
var login = require('./routes/authentication');
const { userModel } = require('./models/user');
const auth = require('./services/auth');
const errorHandler = require('./configurations/error');
var app = express();



//db instanse 
require('./server/dbconnection');


// view engine setupc
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/news', newsRouter);
//user login and signup section
app.use('/signup',login );
//user record section
app.use('/user',auth, userRouter);

app.use(errorHandler);


module.exports = app;

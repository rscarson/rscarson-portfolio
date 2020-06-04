var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var hbs = require('express-handlebars');
var hbshelpers = require('handlebars-helpers');
var multihelpers = hbshelpers();

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.engine(
	"hbs",
	hbs({
		helpers:
			multihelpers,
			partialsDir: ["views/partials"],
			extname: ".hbs",
			layoutsDir: "views",
			defaultLayout: "layout"
		})
);

app.set('view engine', 'hbs');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/font-awesome', express.static('./node_modules/font-awesome'))
app.use('/bootstrap-social', express.static('./node_modules/bootstrap-social'))

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

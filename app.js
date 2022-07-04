var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var fs = require('fs');
var publicdir = __dirname + '/public/views';
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(function(req, res, next) {
    if (req.path.indexOf('.') === -1) {
        var file = publicdir + req.path + '.html';
        fs.exists(file, function(exists) {
            if (exists)
                req.url += '.html';
            next();
        });
    }
    else
        next();
});
app.use(express.static(publicdir));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
// console.log(db.promise().query(`select * from users`));

module.exports = app;

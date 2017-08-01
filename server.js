var express = require('express');
var logger = require('morgan');
var multer=require('multer');
var bodyParser = require('body-parser');
var io=require('socket.io');

//Crud Regestration
var Hotels=require('./cruds/hotelCrud');
var Tickets=require('./cruds/TicketsCrud');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//key value for controller/services

var mongo = require('mongodb');
var mongoose = require('mongoose');
var dbHost = "mongodb://localhost:27017/TL"
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind('Connection error:'));
db.once('open', function () {
    console.log("Connected to DB NS");
});

if (app.get('env') === 'development') {
    var webpack = require('webpack');
    var webpackMiddleware = require('webpack-dev-middleware');
    var config = require('./webpack.config');
    app.use(webpackMiddleware(webpack(config), {
        publicPath: "/build",
        headers: {
            "X-Custom-Webpack-Header": "yes"
        },
        stats: {
            colors: true
        }
    }));
}

var server = app.listen(2353, function () {
    console.log('Server is running on port 2353');
});

'use strict';

var angular =require('angular');
require('angular-route');

require('./controller');
var app=angular.module('TravelOutApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('',{

    })
})
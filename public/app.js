﻿var app = angular.module('FinanceWolf', ['ngAnimate', 'ui.router']); // Create app

// UI router
app.config(function ($stateProvider, $urlRouterProvider) {

    //UI Router
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: "views/home.html"
    })
    .state('responseData', {
        url: '/responsedata',
        templateUrl: "views/responseData.html"
    })
    .state('about', {
        url: '/about',
        templateUrl: "views/about.html" 
    })
});
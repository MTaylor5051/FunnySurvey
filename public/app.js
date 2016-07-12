var app = angular.module('FunnySurvey', ['ngAnimate', 'ui.router', 'nvd3']); // Create app

// UI router
app.config(function ($stateProvider, $urlRouterProvider) {

    //UI Router
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: "views/home.html",
        controller: "HomeCtrl"
    })
    .state('responseData', {
        url: '/responsedata',
        templateUrl: "views/responseData.html",
        controller: "ResponseDataCtrl"
    })
    .state('about', {
        url: '/about',
        templateUrl: "views/about.html",
        controller: "AboutCtrl" 
    });
});
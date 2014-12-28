'use strict';

/**
 * @ngdoc overview
 * @name myYo3App
 * @description
 * # myYo3App
 *
 * Main module of the application.
 */
angular
  .module('myYo3App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

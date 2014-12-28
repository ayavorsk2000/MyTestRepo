'use strict';

/**
 * @ngdoc function
 * @name myYo3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myYo3App
 */
angular.module('myYo3App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

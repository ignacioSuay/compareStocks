'use strict';

/**
 * @ngdoc function
 * @name compareStocksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the compareStocksApp
 */
angular.module('compareStocksApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('data/sb.json')
      .then(function(res){
        $scope.data = res.data;
        console.log("everything is loaded fine");
        console.log($scope.data.length);

      });

  });

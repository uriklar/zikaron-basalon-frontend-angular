'use strict';

/**
 * @ngdoc function
 * @name zikaronBasalonFrontendAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zikaronBasalonFrontendAngularApp
 */
angular.module('zikaronBasalonFrontendAngularApp')
  .controller('MainCtrl', function ($scope, hostService) {
    hostService.getAll().then(function(result) {
    	$scope.hosts = result;
    });

  });

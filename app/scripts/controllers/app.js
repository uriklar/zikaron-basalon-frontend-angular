'use strict';

/**
 * @ngdoc function
 * @name zikaronBasalonFrontendAngularApp.controller:AppctrlCtrl
 * @description
 * # AppctrlCtrl
 * Controller of the zikaronBasalonFrontendAngularApp
 */
angular.module('zikaronBasalonFrontendAngularApp')
  .controller('AppCtrl', function ($scope, authService) {
  	var app = this;
    this.signedIn = authService.signedIn();
    $scope.$watch(function() {
    	return authService.signedIn();
    }, function(newVal) {
    	app.signedIn = newVal;
    });
  });

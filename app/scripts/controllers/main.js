'use strict';

/**
 * @ngdoc function
 * @name zikaronBasalonFrontendAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zikaronBasalonFrontendAngularApp
 */
angular.module('zikaronBasalonFrontendAngularApp')
  .controller('MainCtrl', function (hostService) {
  	var main = this;
    hostService.getAll().then(function(result) {
    	main.hosts = result;
    });

  });

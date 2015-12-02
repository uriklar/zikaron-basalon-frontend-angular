'use strict';

/**
 * @ngdoc function
 * @name zikaronBasalonFrontendAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the zikaronBasalonFrontendAngularApp
 */
angular.module('zikaronBasalonFrontendAngularApp')
  .controller('LoginCtrl', function (authService, $location) {
  	var login = this;
  	this.user = {};
    this.submit = function() {
    	authService.login(login.user.email, login.user.password).then(function() {
    		$location.path('/');
    	});
    };
  });

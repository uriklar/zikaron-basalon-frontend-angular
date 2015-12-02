'use strict';

/**
 * @ngdoc function
 * @name zikaronBasalonFrontendAngularApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the zikaronBasalonFrontendAngularApp
 */
angular.module('zikaronBasalonFrontendAngularApp')
  .controller('SignupCtrl', function (authService, $location) {
  	var signup = this;
    this.user = {};

    this.submit = function() {
    	authService.signup(signup.user).then(function() {
    		$location.path('/');
    	});
    };
  });

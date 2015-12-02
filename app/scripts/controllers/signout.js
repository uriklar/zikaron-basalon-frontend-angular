'use strict';

/**
 * @ngdoc function
 * @name zikaronBasalonFrontendAngularApp.controller:SignoutCtrl
 * @description
 * # SignoutCtrl
 * Controller of the zikaronBasalonFrontendAngularApp
 */
angular.module('zikaronBasalonFrontendAngularApp')
  .controller('SignoutCtrl', function (authService, $location) {
    authService.signout();
  	$location.path('/');
  });

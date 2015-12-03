'use strict';

/**
 * @ngdoc function
 * @name zikaronBasalonFrontendAngularApp.controller:HostProfileCtrl
 * @description
 * # HostProfileCtrl
 * Controller of the zikaronBasalonFrontendAngularApp
 */
angular.module('zikaronBasalonFrontendAngularApp')
  .controller('HostProfileCtrl', function (host) {
  	this.host = host;
  });

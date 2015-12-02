'use strict';

/**
 * @ngdoc function
 * @name zikaronBasalonFrontendAngularApp.controller:NewHostCtrl
 * @description
 * # NewHostCtrl
 * Controller of the zikaronBasalonFrontendAngularApp
 */
angular.module('zikaronBasalonFrontendAngularApp')
  .controller('NewHostCtrl', function (authService, hostService, $location) {
  	var newHost = this;
  	this.host = {
  		user_id: authService.userId(),
  		strangers_allowed: true
  	};

  	this.stragersAllowedToggled = function(allowed) {
  		if(!allowed) {
  			newHost.host.max_guests = null;
  		}
  	};

  	this.submit = function() {
  		hostService.create(newHost.host).then(function() {
  			$location.path('/');
  		});
  	};
  });

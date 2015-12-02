'use strict';

/**
 * @ngdoc service
 * @name zikaronBasalonFrontendAngularApp.hostService
 * @description
 * # hostService
 * Service in the zikaronBasalonFrontendAngularApp.
 */
angular.module('zikaronBasalonFrontendAngularApp')
  .service('hostService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    // TODO: refactor api endpoint url
    this.getAll = function() {
    	return $http({
            method: 'get',
            url: 'http://localhost:3000/hosts',
    	}).then(function(result) {
    		return result.data.hosts;
    	});
    };
  });

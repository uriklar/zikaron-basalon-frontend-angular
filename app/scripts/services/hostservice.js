'use strict';

/**
 * @ngdoc service
 * @name zikaronBasalonFrontendAngularApp.hostService
 * @description
 * # hostService
 * Service in the zikaronBasalonFrontendAngularApp.
 */
angular.module('zikaronBasalonFrontendAngularApp')
  .service('hostService', function ($http, zbConfig) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getAll = function() {
    	return $http({
            method: 'get',
            url: zbConfig.apiUrl + zbConfig.apiEndpoints.hosts,
    	}).then(function(result) {
    		return result.data.hosts;
    	});
    };

    this.create = function(host) {
        return $http({
            method: 'post',
            url: zbConfig.apiUrl + zbConfig.apiEndpoints.hosts,
            data: { host: host }
        });
    };

    this.get = function(id) {
        return $http({
            method: 'get',
            url: zbConfig.apiUrl + zbConfig.apiEndpoints.hosts + '/' + id,
        }).then(function(result) {
            console.log(result);
            return result.data;
        });
    };
  });

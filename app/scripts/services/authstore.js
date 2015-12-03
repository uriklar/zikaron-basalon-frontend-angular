'use strict';

/**
 * @ngdoc service
 * @name zikaronBasalonFrontendAngularApp.authStore
 * @description
 * # authStore
 * Service in the zikaronBasalonFrontendAngularApp.
 */
angular.module('zikaronBasalonFrontendAngularApp')
  .service('authStore', function () {
    this.setAccessToken = function (token) {
    	if(token) {
    		localStorage.setItem('ZBaccessToken', token);
    	} else {
    		localStorage.removeItem('ZBaccessToken');
    	}
    };

    this.setUserId = function (id) {
    	if(id) {
    		localStorage.setItem('ZBuserId', id);
    	} else {
    		localStorage.removeItem('ZBuserId');
    	}
    };

    this.getAccessToken = function() {
    	return localStorage.getItem('ZBaccessToken');
    };

    this.getUserId = function() {
    	return localStorage.getItem('ZBuserId');
    };
  });

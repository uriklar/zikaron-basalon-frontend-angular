'use strict';

/**
 * @ngdoc service
 * @name zikaronBasalonFrontendAngularApp.authService
 * @description
 * # authService
 * Service in the zikaronBasalonFrontendAngularApp.
 */
angular.module('zikaronBasalonFrontendAngularApp')
  .service('authService', function ($http, zbConfig, authStore) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.signup = function(user) {
    	return $http({
            method: 'post',
            url: zbConfig.apiUrl + zbConfig.apiEndpoints.users,
            data: {
            	user: user
            }
    	}).then(function successCallback(result) {
            authStore.setAccessToken(result.data.access_token);
            authStore.setUserId(result.data.user_id);
    	}, function errorCallback (error) {
    		console.log(error);
    	});
    };

    this.signout = function() {
        authStore.setAccessToken(null);
        authStore.setUserId(null);
    };

    this.login = function(email, password) {
        return $http({
            method: 'post',
            url: zbConfig.apiUrl + zbConfig.apiEndpoints.login,
            data: {
                email: email,
                password: password
            }
        }).then(function successCallback(result) {
            authStore.setAccessToken(result.data.access_token);
            authStore.setUserId(result.data.user_id);
        }, function errorCallback (error) {
            console.log(error);
        });
    };

    this.signedIn = function() {
    	return authStore.getAccessToken();
    };

    this.userId = function() {
        return authStore.getUserId();
    };
  });

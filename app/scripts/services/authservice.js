'use strict';

/**
 * @ngdoc service
 * @name zikaronBasalonFrontendAngularApp.authService
 * @description
 * # authService
 * Service in the zikaronBasalonFrontendAngularApp.
 */
angular.module('zikaronBasalonFrontendAngularApp')
  .service('authService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var authService = this;
    authService._accessToken = localStorage.getItem('ZBaccessToken');
    authService._userId = localStorage.getItem('ZBuserId');

    // TODO: refactor api endpoint url
    this.signup = function(user) {
    	return $http({
            method: 'post',
            url: 'http://localhost:3000/users',
            data: {
            	user: user
            }
    	}).then(function successCallback(result) {
    		authService._accessToken = result.data.access_token;
    		authService._userId = result.data.user_id;
    		localStorage.setItem('ZBaccessToken', result.data.access_token);
            localStorage.setItem('ZBuserId', result.data.user_id);
    	}, function errorCallback (error) {
    		console.log(error);
    	});
    };

    this.signout = function() {
    	authService._accessToken = null;
  		authService._userId = null;
  		localStorage.removeItem('ZBaccessToken');
      localStorage.removeItem('ZBuserId');
    };

    // TODO: refactor api endpoint url
    this.login = function(email, password) {
        return $http({
            method: 'post',
            url: 'http://localhost:3000/login',
            data: {
                email: email,
                password: password
            }
        }).then(function successCallback(result) {
            authService._accessToken = result.data.access_token;
            authService._userId = result.data.user_id;
            localStorage.setItem('ZBaccessToken', result.data.access_token);
            localStorage.setItem('ZBuserId', result.data.user_id);
        }, function errorCallback (error) {
            console.log(error);
        });
    };

    this.signedIn = function() {
    	return authService._accessToken;
    };
  });

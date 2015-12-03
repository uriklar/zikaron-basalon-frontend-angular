'use strict';

/**
 * @ngdoc overview
 * @name zikaronBasalonFrontendAngularApp
 * @description
 * # zikaronBasalonFrontendAngularApp
 *
 * Main module of the application.
 */
angular
  .module('zikaronBasalonFrontendAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('zbConfig', {
    apiUrl: 'http://localhost:3000',
    apiEndpoints: {
      login: '/login',
      users: '/users',
      hosts: '/hosts',
      guests: '/guests',
      requests: '/requests'
    }
  })
  .config(function ($routeProvider, $httpProvider) {
    // Intercept every request and add custom headers (Authorization)
    $httpProvider.interceptors.push('httpRequestInterceptor');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/signout', {
        template: '',
        controller: 'SignoutCtrl',
        controllerAs: 'signout'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/new-host', {
        templateUrl: 'views/new-host.html',
        controller: 'NewHostCtrl',
        controllerAs: 'newHost'
      })
      .when('/host/:hostId', {
        templateUrl: 'views/host-profile.html',
        controller: 'HostProfileCtrl',
        controllerAs: 'hostProfile',
        resolve: {
          host: function($route, hostService){
            return hostService.get($route.current.params.hostId);
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });

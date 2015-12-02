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
  .config(function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
      });
  });

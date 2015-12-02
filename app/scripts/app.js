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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

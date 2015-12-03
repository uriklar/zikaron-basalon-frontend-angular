'use strict';

/**
 * @ngdoc service
 * @name zikaronBasalonFrontendAngularApp.httpRequestInterceptor
 * @description
 * # httpRequestInterceptor
 * Factory in the zikaronBasalonFrontendAngularApp.
 */
angular.module('zikaronBasalonFrontendAngularApp')
  .factory('httpRequestInterceptor', function (authStore) {
    return {
      request: function (config) {

        config.headers.Authorization = authStore.getAccessToken();

        return config;
      }
  };
});

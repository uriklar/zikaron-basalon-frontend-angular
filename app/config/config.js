/* eslint max-len:0 */

import angular                       from 'angular';
import { exceptionHandlerDecorator } from 'config/decorators';
import { constants }                 from 'config/constants';

// @ngInject
function config($compileProvider, $httpProvider, $locationProvider, $logProvider, ENV, uiGmapGoogleMapApiProvider) {

  if (ENV === 'production') {
    // Enable for performance boost on production
    $compileProvider.debugInfoEnabled(false);

    // Disable console.log outputs for production
    $logProvider.debugEnabled(false);
  }

  // Combine close $http calls together and run $digest once
  $httpProvider.useApplyAsync(true);

  // Allows to access application URLs without the # sign
  $locationProvider.html5Mode(true);

  uiGmapGoogleMapApiProvider.configure({
    //    key: 'your api key',
    v: '3.20', //defaults to latest 3.X anyhow
    libraries: 'places'
  });
}

export default angular.module('ZikaronBasalonFrontendAngular.config', [])
  .constant(constants)
  .config(config)
  .decorator('$exceptionHandler', exceptionHandlerDecorator);

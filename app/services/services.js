import angular from 'angular';
import AuthService from 'services/auth-service';
import AuthStore from 'services/auth-store';
import HttpRequestInterceptor from 'services/http-request-interceptor';

export default angular.module('ZikaronBasalonFrontendAngular.services', [])
	.service('authStore', AuthStore)
	.service('authService', AuthService)
  .factory('httpRequestInterceptor', ['authStore', HttpRequestInterceptor])
;

import angular from 'angular';
import HttpRequestInterceptor from 'services/http-request-interceptor';
import AuthService from 'services/auth-service';
import AuthStore from 'services/auth-store';
import HostService from 'services/host-service';


export default angular.module('ZikaronBasalonFrontendAngular.services', [])
	.service('authStore', AuthStore)
	.service('authService', AuthService)
  .factory('httpRequestInterceptor', ['authStore', HttpRequestInterceptor])
  .service('hostService', HostService)
;

import angular from 'angular';
import AuthService from 'services/auth-service';
import HostService from 'services/host-service';
import HostDetailsService from 'services/HostDetailsService';
import AuthStore from 'services/auth-store';
import HttpRequestInterceptor from  'services/http-request-interceptor';

export default angular.module('ZikaronBasalonFrontendAngular.services', [])
	.service('authStore', AuthStore)
	.service('authService', AuthService)
.factory('httpRequestInterceptor', ['authStore', HttpRequestInterceptor])
 .service('hostService', HostService)

	.service('authService', AuthService)
.service('HostDetailsService', HostDetailsService )
;

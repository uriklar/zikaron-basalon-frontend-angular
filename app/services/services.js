import angular from 'angular';
import AuthService from 'services/auth-service';
import HostService from 'services/host-service';
import HostDetailsService from 'services/hostDetailsService';
import AuthStore from 'services/auth-store';
import HttpRequestInterceptor from  'services/http-request-interceptor';
import CommunityLeaderService from 'services/community-leader-service';

export default angular.module('ZikaronBasalonFrontendAngular.services', [])
	.service('authStore', AuthStore)
	.service('authService', AuthService)
.factory('httpRequestInterceptor', ['authStore', HttpRequestInterceptor])
 .service('hostService', HostService)
	.service('authService', AuthService)
.service('HostDetailsService', HostDetailsService )
  .service('communityLeaderService', CommunityLeaderService)
;

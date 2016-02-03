import angular from 'angular';
import AuthService from 'services/auth-service';

export default angular.module('ZikaronBasalonFrontendAngular.services', [])
	.service('authService', AuthService);

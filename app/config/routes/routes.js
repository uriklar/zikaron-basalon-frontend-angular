import angular from 'angular';
import 'angular-ui-router';

// import { homeRoutes } from 'config/routes/home';
import { staticRoutes } from 'config/routes/static';
import {registrationRoutes} from 'config/routes/registration';
import { searchRoutes } from 'config/routes/search';

const defaultRoute = /* @ngInject */ ($urlRouterProvider) => {
  $urlRouterProvider.otherwise('/404');
};

export default angular.module('ZikaronBasalonFrontendAngular.routes', ['ui.router'])
  .config(defaultRoute)
  // .config(homeRoutes)
  .config(staticRoutes)
.config(registrationRoutes)
  .config(searchRoutes)
;

import angular from 'angular';
import 'angular-ui-router';

import { staticRoutes } from 'config/routes/static';
import { hostSignupRoutes } from 'config/routes/host-signup';
import { searchRoutes } from 'config/routes/search';
import { dashboardRoutes } from 'config/routes/dashboard';
import {registrationRoutes} from 'config/routes/registration';
import { adminRoutes } from 'config/routes/admin';

const defaultRoute = /* @ngInject */ ($urlRouterProvider) => {
  $urlRouterProvider.otherwise('/404');
};

export default angular.module('ZikaronBasalonFrontendAngular.routes', ['ui.router'])
  .config(defaultRoute)
  .config(staticRoutes)
  .config(hostSignupRoutes)
  .config(searchRoutes)
  .config(dashboardRoutes)
.config(registrationRoutes)
  .config(adminRoutes)
;

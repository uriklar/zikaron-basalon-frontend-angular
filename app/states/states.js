import angular              from 'angular';
import { SearchController } from 'states/search/search';
import { DashboardController } from 'states/dashboard/dashboard';
import { HostSignupController } from 'states/host-signup/host-signup';

import { StepOneController } from 'states/new-host/step-1/step-1';

export default angular.module('ZikaronBasalonFrontendAngular.controllers', [])
  .controller('SearchController', SearchController)
  .controller('DashboardController', DashboardController)
  .controller('HostSignupController', HostSignupController)
  .controller('StepOneController', StepOneController)
;

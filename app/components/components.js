import angular from 'angular';
import { searchInput } from 'components/search/search-input/search-input';
import { map } from 'components/search/map/map';
import { hostList } from 'components/search/host-list/host-list';
import { dashboardSummary } from 'components/dashboard/dashboard-summary/dashboard-summary';
import { dashboardList } from 'components/dashboard/dashboard-list/dashboard-list';
import { grid } from 'components/common/grid/grid';
import { signupForm } from 'components/common/signup-form/signup-form';

export default angular.module('ZikaronBasalonFrontendAngular.components', [])
  .directive('searchInput', searchInput)
  .directive('map', map)
  .directive('hostList', hostList)
  .directive('dashboardSummary', dashboardSummary)
  .directive('dashboardList', dashboardList)
  .directive('grid', grid)
  .directive('signupForm', signupForm)
;

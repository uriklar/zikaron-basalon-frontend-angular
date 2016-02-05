import angular from 'angular';
import { searchInput } from 'components/search/search-input/search-input';
import { map } from 'components/search/map/map';
import { hostList } from 'components/search/host-list/host-list';

export default angular.module('ZikaronBasalonFrontendAngular.components', [])
  .directive('searchInput', searchInput)
  .directive('map', map)
  .directive('hostList', hostList)
;

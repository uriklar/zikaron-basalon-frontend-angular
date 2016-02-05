import controller from 'components/search/map/map-controller';
import 'components/search/map/styles.scss';

export function map() {
  return {
    restrict: 'E',
    templateUrl: 'components/search/map/map.html',
    controller,
    controllerAs: 'Map'
  };
}
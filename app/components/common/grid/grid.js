import 'components/common/grid/styles.scss';
import controller from 'components/common/grid/grid-controller';

export function grid() {
  return {
    restrict: 'E',
    templateUrl: 'components/common/grid/grid.html',
    scope: {
      keys: '=',
      data: '=',
      filter: '='
    },
    controller,
    controllerAs: 'Grid',
    bindToController: true
  };
}
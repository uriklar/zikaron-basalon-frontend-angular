import 'components/common/grid/styles.scss';

export function grid() {
  return {
    restrict: 'E',
    templateUrl: 'components/common/grid/grid.html',
    scope: {
      keys: '=',
      data: '='
    }
  };
}
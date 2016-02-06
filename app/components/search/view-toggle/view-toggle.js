import 'components/search/view-toggle/styles.scss';

export function viewToggle() {
  return {
    scope: {
      selected: '=',
      onSelect: '='
    },
    restrict: 'E',
    templateUrl: 'components/search/view-toggle/view-toggle.html',
    controller: class ViewToggleController {
      onClick(clicked) {
        this.selected = clicked;
        this.onSelect(clicked);
      }
    },
    controllerAs: 'ViewToggle',
    bindToController: true
  };
}
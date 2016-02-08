export function compareTo() {
  return {
    require: 'ngModel',
    scope: {
      otherModelValue: '=compareTo'
    },
    link: (scope, element, attributes, ngModel) => {

      ngModel.$validators.compareTo = function(modelValue) {
        return modelValue == scope.otherModelValue;
      };

      scope.$watch('otherModelValue', function() {
        ngModel.$validate();
      });
    }
  };
}
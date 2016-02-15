export class StepOneController {

  // @ngInject
  constructor($scope) {
    this._scope = $scope;
    this.form = {
      hostedBefore: 'false'
    };

    this.organization = 'false';
  }

  orgChanged(value) {
    if (value === 'false') {
      this.form.orgName = this.form.orgRole = null;
    }
  }

  continue() {
    console.log(this._scope.stepOneForm.$valid);
  }
}

StepOneController.$inject = ['$scope'];
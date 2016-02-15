/**
 * Created by ranwahle on 02/02/2016.
 */
export /* @ngInject */ function newHostRoutes($stateProvider) {
  $stateProvider
    .state('new-host-step-1', {
      url: '/new-host/step-1',
      templateUrl: 'states/new-host/step-1/step-1.html',
      controller: 'StepOneController',
      controllerAs: 'StepOne'
    });
}
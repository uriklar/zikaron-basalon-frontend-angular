/**
 * Created by ranwahle on 02/02/2016.
 */
export /* @ngInject */ function hostSignupRoutes($stateProvider) {
    $stateProvider
      .state('host-signup', {
        url: '/signup',
        templateUrl: 'states/host-signup/host-signup.html',
        controller: 'HostSignupController',
        controllerAs: 'HostSignup',
        resolve: {
          host: (hostService)
        }
      });
}
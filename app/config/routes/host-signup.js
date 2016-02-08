/**
 * Created by ranwahle on 02/02/2016.
 */
export /* @ngInject */ function hostSignupRoutes($stateProvider) {
    $stateProvider
      .state('host-signup', {
        url: '/signup',
        templateUrl: 'states/host-signup/host-signup.html',
        controller: 'HostSignupController',
        controllerAs: 'controller'
      }).state('host-organzation-prevhosting',{
        url: '/host-organzation-prevhosting',
        templateUrl: 'states/host-organzation-prevhosting/host-organzation-prevhosting.html',
        controller: 'HostedAndOrganizationController',
        controllerAs: 'controller'
    }).state('host-login',{
        url: '/hostLogin',
        templateUrl: 'states/host-login/host-login.html',
        controller: 'HostLoginController',
        controllerAs: 'controller'
    }).state('host-organization-prevhosting',{
        url: '/host-organization-prevhosting',
        templateUrl: 'states/host-organization-prevhosting/host-organization-prevhosting.html',
        controller: 'PrevHostedAndOrganizationController',
        controllerAs: 'controller'
    }
    )
    ;
}
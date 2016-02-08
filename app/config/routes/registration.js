/**
 * Created by ranwahle on 02/02/2016.
 */
export /* @ngInject */ function registrationRoutes($stateProvider) {
    $stateProvider
        .state('createAccount',
            {
                url: '/createAccount',
                templateUrl: '/states/register/register.html',
                controller: 'RegisterController',
                controllerAs: 'controller'
            }
        ).state('hostedAndOrganization',
        {
            url: '/hostedAndOrganization',
            templateUrl: '/states/hostedAndOrganization/hostedAndOrganization.html',
            controller: 'PrevHostedAndOrganizationController',
            controllerAs: 'controller'
        });
}
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
            templateUrl: '/states/host-organization-prevhosting/host-organization-prevhosting.html',
            controller: 'PrevHostedAndOrganizationController',
            controllerAs: 'controller'
        }).state('sessionDetails',
        {
            url: '/sesionDetails',
            templateUrl: '/states/session-details/session-details.html',
            controller: 'SessionDetailsController',
            controllerAs: 'controller'
        }

    );
}
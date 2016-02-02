/**
 * Created by ranwahle on 02/02/2016.
 */
export /* @ngInject */ function registrationRoutes($stateProvider) {
    $stateProvider
        .state('createAccount',
            {
                url: '/createAccount',
                templateUrl: 'partials/register.html',
                controller: 'RegisterController',
                controllerAs: 'controller'
            }

        );
}
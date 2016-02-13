export /* @ngInject */ function adminRoutes($stateProvider) {

  $stateProvider
    .state('create-community-leader', {
      url: '/create-community-leader',
      templateUrl: '/states/create-community-leader/create-community-leader.html',
      controller: 'CreateCommunityLeaderController',
      controllerAs: 'ccl'
    });
}

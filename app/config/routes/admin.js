export /* @ngInject */ function adminRoutes($stateProvider) {

  $stateProvider
    .state('community-leaders', {
      url: '/community-leaders',
      templateUrl: 'states/admin/community-leader-index.html',
      controller: 'CommunityLeaderIndexController',
      controllerAs: 'ctrl'
    })
    .state('create-community-leader', {
      url: '/community-leaders/create',
      templateUrl: '/states/admin/create-community-leader.html',
      controller: 'CreateCommunityLeaderController',
      controllerAs: 'ctrl',
      resolve: { leader: () => null}
    })
    .state('edit-community-leader', {
      url: '/community-leaders/:leaderId',
      templateUrl: '/states/admin/create-community-leader.html',
      controller: 'CreateCommunityLeaderController',
      controllerAs: 'ctrl',
      resolve: {
        leader: ($stateParams, communityLeaderService) => {
          return communityLeaderService.get($stateParams.leaderId)
                .then(({ data}) => data.community_leader);
        }
      }
    });
}

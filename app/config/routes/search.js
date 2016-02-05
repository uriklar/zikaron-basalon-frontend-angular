export /* @ngInject */ function searchRoutes($stateProvider) {

  $stateProvider
      .state('search', {
        url: '/',
        templateUrl: '/states/search/search.html',
        controller: 'SearchController',
        controllerAs: 'Search'
      })
  ;
}

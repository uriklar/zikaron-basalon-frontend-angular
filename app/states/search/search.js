export class SearchController {

  // @ngInject
  constructor(uiGmapGoogleMapApi, $log) {
    this.googleMaps = uiGmapGoogleMapApi;

    this.googleMaps.then((maps) => $log.log(maps));
  }

}

SearchController.$inject = ['uiGmapGoogleMapApi', '$log'];
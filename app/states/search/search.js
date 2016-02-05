export class SearchController {

  // @ngInject
  constructor(uiGmapGoogleMapApi) {
    this.googleMaps = uiGmapGoogleMapApi;

    this.googleMaps.then((maps) => console.log(maps));
  }

}

SearchController.$inject = ['uiGmapGoogleMapApi'];
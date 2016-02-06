import 'states/search/styles.scss';

export class SearchController {

  // @ngInject
  constructor(uiGmapGoogleMapApi) {
    this.googleMaps = uiGmapGoogleMapApi;
    this.view = 'map';
    this.viewToggled = this.viewToggled.bind(this);
    //this.googleMaps.then((maps) => console.log(maps));
  }

  viewToggled(view) {
    this.view = view;
  }

}

SearchController.$inject = ['uiGmapGoogleMapApi'];
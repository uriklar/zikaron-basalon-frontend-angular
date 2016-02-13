import { getPlaceLocality } from 'lib/place-utils';

export class CreateCommunityLeaderController {

  // @ngInject
  constructor(uiGmapGoogleMapApi, communityLeaderService) {
    this.googleMaps = uiGmapGoogleMapApi;
    this.communityLeaderService = communityLeaderService;
    this.form = { cities: [] };

    this.initCityInput = this.initCityInput.bind(this);
    this.placeChanged  = this.placeChanged.bind(this);

    this.googleMaps.then(this.initCityInput);
  }

  initCityInput(maps) {
    const input = document.getElementById('city');
    this.autocomplete = new maps.places.Autocomplete(input ,{ types: ['(cities)'] });
    this.autocomplete.addListener('place_changed',this.placeChanged);
  }

  placeChanged() {
    this.cityInput = getPlaceLocality(this.autocomplete.getPlace());
  }

  addCity(city) {
    this.form.cities = this.form.cities.concat([city]);
    this.cityInput = '';
  }

  removeCity(city) {
    this.form.cities = this.form.cities.filter((c) => c !== city);
  }

  submit() {
    this.communityLeaderService.create(this.form)
    .then((response) => console.log(response))
    .catch(() => this.error = 'קיים כבר מוביל קהילה עם המייל הזה');
  }

}

CreateCommunityLeaderController.$inject = ['uiGmapGoogleMapApi', 'communityLeaderService'];
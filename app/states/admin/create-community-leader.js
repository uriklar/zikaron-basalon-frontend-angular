import { getPlaceLocality } from 'lib/place-utils';

export class CreateCommunityLeaderController {

  // @ngInject
  constructor(uiGmapGoogleMapApi, communityLeaderService, $state, $scope, leader) {
    this.googleMaps = uiGmapGoogleMapApi;
    this.communityLeaderService = communityLeaderService;
    this.leader = leader;
    this.$state = $state;
    this.$scope = $scope;

    this.initCityInput = this.initCityInput.bind(this);
    this.placeChanged  = this.placeChanged.bind(this);
    this.initLeader    = this.initLeader.bind(this);

    this.googleMaps.then(this.initCityInput);
    this.initLeader(this.leader);
  }

  initCityInput(maps) {
    const input = document.getElementById('city');
    this.autocomplete = new maps.places.Autocomplete(input ,{ types: ['(cities)'] });
    this.autocomplete.addListener('place_changed',this.placeChanged);
  }

  placeChanged() {
    this.cityInput = getPlaceLocality(this.autocomplete.getPlace());
    this.form.cities = this.form.cities.concat([this.cityInput]);
    this.cityInput = '';
    this.$scope.$apply();
  }

  removeCity(city) {
    this.form.cities = this.form.cities.filter((c) => c !== city);
  }

  initLeader(leader) {
    if (leader) {
      return this.form = {
        id: leader.id,
        email: leader.email,
        cities: leader.cities.map((city) => city.name)
      };
    }

    return this.form = { cities: [] };
  }

  submit() {
    if (this.leader) {
      this.communityLeaderService.update(this.form)
          .then((response) => this.$state.go('community-leaders'))
          .catch(() => this.error = 'משהו קרה');
    } else {
      this.communityLeaderService.create(this.form)
          .then((response) => console.log(response))
          .catch(() => this.error = 'קיים כבר מוביל קהילה עם המייל הזה');
    }
  }

}

CreateCommunityLeaderController.$inject = ['uiGmapGoogleMapApi',
                                           'communityLeaderService',
                                           '$state',
                                           '$scope',
                                           'leader'];
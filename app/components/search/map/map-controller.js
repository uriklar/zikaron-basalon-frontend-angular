class MapController {
  constructor() {
    this.name = 'map';
    this.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
    this.map.options = {scrollwheel: false};
  }
}

export default MapController;

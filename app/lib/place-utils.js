export function getPlaceLocality(place) {
  return place.address_components
        .filter((component) => component.types.includes('locality'))[0]
        .long_name;
}
export default function(authStore) {
  var service = this;

  service.request = function(config) {
    config.headers.Authorization = authStore.authToken();
    return config;
  };

  service.responseError = function(response) {
    return response;
  };

  return service;
}
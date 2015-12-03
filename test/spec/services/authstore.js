'use strict';

describe('Service: authStore', function () {

  // load the service's module
  beforeEach(module('zikaronBasalonFrontendAngularApp'));

  // instantiate service
  var authStore;
  beforeEach(inject(function (_authStore_) {
    authStore = _authStore_;
  }));

  it('should do something', function () {
    expect(!!authStore).toBe(true);
  });

});

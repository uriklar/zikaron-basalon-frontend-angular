'use strict';

describe('Service: hostService', function () {

  // load the service's module
  beforeEach(module('zikaronBasalonFrontendAngularApp'));

  // instantiate service
  var hostService;
  beforeEach(inject(function (_hostService_) {
    hostService = _hostService_;
  }));

  it('should do something', function () {
    expect(!!hostService).toBe(true);
  });

});

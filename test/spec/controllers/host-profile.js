'use strict';

describe('Controller: HostProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('zikaronBasalonFrontendAngularApp'));

  var HostProfileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HostProfileCtrl = $controller('HostProfileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HostProfileCtrl.awesomeThings.length).toBe(3);
  });
});

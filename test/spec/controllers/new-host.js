'use strict';

describe('Controller: NewHostCtrl', function () {

  // load the controller's module
  beforeEach(module('zikaronBasalonFrontendAngularApp'));

  var NewHostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewHostCtrl = $controller('NewHostCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewHostCtrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Directive: addressField', function () {

  // load the directive's module
  beforeEach(module('zikaronBasalonFrontendAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<address-field></address-field>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the addressField directive');
  }));
});

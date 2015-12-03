'use strict';

/**
 * @ngdoc directive
 * @name zikaronBasalonFrontendAngularApp.directive:addressField
 * @description
 * # addressField
 */
angular.module('zikaronBasalonFrontendAngularApp')
  .directive('addressField', function () {

    return {
    	scope: {
    		address: '=',
    		lat: '=',
    		lng: '='
    	},
      templateUrl: 'views/address-field.html',
      restrict: 'E',
      link: function postLink(scope) {
      	var input = $('#address');
		    var autocomplete = new google.maps.places.Autocomplete(input[0],{});

      	function placeChanged() {
        	var place = autocomplete.getPlace();
			    if (!place.geometry) {
			      window.alert("Autocomplete's returned place contains no geometry");
			      return;
			    }

			    scope.$apply(function () {
				    scope.address = place.formatted_address;
				    scope.lat = place.geometry.location.lat();
				    scope.lng = place.geometry.location.lng();
			  	});
        }

      	
		    autocomplete.addListener('place_changed', placeChanged);
      }
    };
  });

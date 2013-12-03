pen.define([
  'common-ui/angular',
  'angular-mocks',
  '_sample_/filters/filters'
  ], 
  function(angular, mocks, filters) {

	'use strict';

	describe('filter', function() {

    // Provide the registration of the filter before each test
    beforeEach(function() {
      module(function($filterProvider) {      
        filters($filterProvider.register);
      });
    });

	  describe('checkmark', function() {

	    it('should convert boolean values to unicode checkmark or cross', 
        inject(function(checkmarkFilter) {
          expect(checkmarkFilter(true)).toBe('\u2713');
          expect(checkmarkFilter(false)).toBe('\u2718');
        }));
	  });
	});

});

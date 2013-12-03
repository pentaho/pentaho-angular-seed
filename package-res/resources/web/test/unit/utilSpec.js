var deps = [
  'common-ui/angular',
  'angular-mocks',
  '_sample_/util'];

pen.define(deps, function(angular, mocks, Util) {
  'use strict';

  describe('utilities', function() {

    it('should buildResourceUrl when no CONTEXT_PATH is present', function() {
      var url = Util.buildResourceUrl('/partials/XYZ.html');
      expect(url).toBe('/partials/XYZ.html');
    });

  });

});

// core is the all-encompassing build of the app. it needs to have been loaded prior to asking
// for modules defined in it
require(['_sample_/main-module'], function() {

  require([
    'mantle/puc-api/pucAngularPlugin',
    '_sample_/app'
  ], function(PUCAngularPlugin, appConfig) {

    var plugin = new PUCAngularPlugin(appConfig).register();

    pen.openSample = function() {
      plugin.goNext('/view1');
    }

  });

});

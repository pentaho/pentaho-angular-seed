pen.require([
  'mantle/puc-api/pucAngularPlugin',
  '_sample_/app'
  ], function(PUCAngularPlugin, appConfig) {
  
  var plugin = new PUCAngularPlugin(appConfig).register();

  pen.openSample = function() {
    plugin.goNext('/view1');
  }

});
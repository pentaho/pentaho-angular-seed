pen.define([], function(){
	'use strict';

  var urlPrefix = "";
  if( typeof(CONTEXT_PATH) != "undefined" ) {
    urlPrefix = CONTEXT_PATH + "content/_sample_/resources/web/app/";
  }

  var Util = {

    buildResourceUrl: function(/*String*/ path) {
      return urlPrefix + path;
    }

  };

  return Util

});
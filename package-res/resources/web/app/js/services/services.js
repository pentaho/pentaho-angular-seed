/* Services */
define([
  "common-ui/angular",
  "common-ui/angular-resource",
  "common-ui/jquery"],
  function(angular, Resource, $){

	'use strict';

  var services = function($serviceProvider) {

    $serviceProvider('Hello', function() {

      this.sayHello = function(name) {
        return "Hello, " + (name ? name : "World");
      }

    });

  };

  return services;

});
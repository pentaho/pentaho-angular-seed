pen.define([
  'common-ui/angular',
  'angular-mocks',
  '_sample_/services/services'
],
function(angular, mocks, services, Resource) {

	'use strict';
	
	
	describe('services', function() {
		
		beforeEach(function(){
			// Register Service to new module
			services(angular.module('myServiceMod', ['ngResource']).service);

			// Require this module for test
			module("myServiceMod");
		});

		describe('Hello', function() {
			var myHello;

			beforeEach(inject(function(Hello) { myHello = Hello } ));

			it('should be defined', function() {
					expect(myHello).toBeDefined();
			});
				
			it('should say "Hello, World" with no parameters', function() {
				expect(myHello.sayHello()).toBe('Hello, World');
			});

			it('should say "Hello, ____" with parameter', function() {
				var who = "me";
				expect(myHello.sayHello(who)).toBe('Hello, ' + who);
			});

		});

	});

});
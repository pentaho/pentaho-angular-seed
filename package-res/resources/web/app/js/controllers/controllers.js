define([
	"common-ui/angular",
	"common-ui/angular-resource",
	"common-ui/angular-route",
	"_sample_/util"
	],

	function(angular, Resource, Route, Utils){
		/* Controllers */
		function View1Ctrl($scope, Hello) {
		  $scope.title = 'Pentaho-Angular Seed Project';
		  $scope.greeting = "";
		  $scope.person = "";

		  $scope.buildResourceUrl = Utils.buildResourceUrl;

		  $scope.sayHello = function() {
		  	$scope.greeting = Hello.sayHello($scope.person);
		  }

		}

		function View2Ctrl($scope) {
			$scope.title = 'View2';
		}

		var controllers = function($controller) {
			// inject the scope, Hello service defined in services/services.js
			$controller('View1Ctrl', ['$scope', 'Hello', View1Ctrl]);

			$controller('View2Ctrl', ['$scope', '$routeParams', View2Ctrl]);
		};

		return controllers;

});
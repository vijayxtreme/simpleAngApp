//declare a global myapp variable that gets the angular module and its dependencies
var myApp = angular.module('myApp', ['ngResource', 'ngRoute']);

//declare a controller -- controls the view 
myApp.controller('mainController', ['$scope', '$routeParams', '$log', function($scope, $routeParams, $log){
	$scope.name = "vijay";

}])

myApp.controller('helloController', ['$scope', '$routeParams', '$log', function($scope, $routeParams, $log){

	$scope.name = "chi";
	$scope.params = $routeParams;
	$scope.params = $routeParams;
	$log.info($scope.params);
	$scope.id = $scope.params.id;

}])



.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})

		.when('/hello/:id', {
			templateUrl: 'hello.html',
			controller: 'helloController'
		});

})
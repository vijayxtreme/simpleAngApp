//declare a global myapp variable that gets the angular module and its dependencies
var myApp = angular.module('myApp', []);

//declare a controller -- controls the view 
myApp.controller('mainController', ['$scope', '$http', function($scope, $http){
	$scope.myInput = "";

	$scope.submit = function(event){
		event.preventDefault();
		alert("Not submitted")
	};


}]);
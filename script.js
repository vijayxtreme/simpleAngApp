//declare a global myapp variable that gets the angular module and its dependencies
var myApp = angular.module('myApp', []);

//declare a controller -- controls the view 
myApp.controller('mainController', ['$scope', function($scope){
	$scope.myInput = "";

	$scope.submit = function(event){
		event.preventDefault();
		alert("Not submitted")
	};


}]);



myApp.controller('statsController', ['$scope', '$http', '$log', function($scope, $http, $log){
	$scope.users = '';
	

	$http.get('http://localhost:3000/')
		.success(function(data){
			$log.info(data);
			$scope.users = data;
		})
		.error(function(err){
			$log.warn(err);
		});


}]);

myApp.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
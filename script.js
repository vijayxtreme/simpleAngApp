//declare a global myapp variable that gets the angular module and its dependencies
var myApp = angular.module('myApp', ['ngResource', 'ngRoute']);

//declare a controller -- controls the view 
myApp.controller('mainController', ['$scope', function($scope){
	$scope.myInput = "";

	$scope.submit = function(event){
		event.preventDefault();
		alert("Not submitted")
	};
  

}]);

myApp.controller('usersController', ['$scope', '$http', '$log', function($scope, $http, $log){
	$scope.users = '';

	$scope.getUsers = function(){
		$scope.users = '';
		$http.get('http://localhost:3000/')
		.success(function(data){
			$log.info(data);
			$scope.users = data;
		})
		.error(function(err){
			$log.warn(err);
		});
	}

	$scope.getUsers();

	
	$scope.name = 'default',
		$scope.age = 0,
		$scope.profession = '',
		$scope.hobbies = '',
		$scope.glyph = 'glyphicon-asterisk',

	$scope.addUser = function(event){
		event.preventDefault();
		$log.info($scope.name, $scope.age, $scope.profession, $scope.hobbies, $scope.glyph);
		$http.post('http://localhost:3000/save', {
			name:$scope.name,
			age:$scope.age,
			profession:$scope.profession,
			hobbies:$scope.hobbies,
			glyph:$scope.glyph
		}).success(function(data){
			$scope.getUsers();
		}).error(function(err){
			$log.warn(err);
		});

	};

	$scope.delUser = function(user){
		if(confirm("Delete: " + user + "?")){
			$http.post('http://localhost:3000/del', {
				name: user
			}).success(function(){
				$scope.getUsers();
			}).error(function(err){
				$log.warn(err);
			})
		}
	}



}]);

myApp.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
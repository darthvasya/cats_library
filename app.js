angular.module('studuApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/static/home.html',
			controller: 'FirstController'

		})
		.state('about', {
			url: '/about',
			templateUrl: '/static/about.html'
		});
})

.controller('FirstController',  function($scope, $http){
	$scope.visible = true;
	$scope.rotateCats = false;
	$scope.test = 'Hide';
	

	
	 $http.get("info.json")
    .then(function(response) {
    	$scope.persons = response.data.records;
    });

   
	$scope.addPerson = function() {
		$scope.persons.push({id: 0,name: $scope.name, age: $scope.age, img: 'images/cat3.png'});
		$scope.name = '';
		$scope.age = 0;
	};
})
.directive('helloWorld', function(){
	return {
		template: 'Hello World'
	}
});
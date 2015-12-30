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

.controller('FirstController', ['$scope', '$http', function($scope){
	$scope.test = 'Hello';

	$scope.persons = [
		{"id": 0,
		 "name": "Vasya",
		 "age": 1,
		 "img": 'images/cat0.png'	
		},
		{"id": 1,
		 "name": "Anya",
		 "age": 2,
		 "img": 'images/cat1.png'
		},
		{"id": 2,
		 "name": "Natasha",
		 "age": 3,
		 "img": 'images/cat2.png'
		}
	];

	$scope.addPerson = function() {
		$scope.persons.push({id: 0,name: $scope.name, age: $scope.age, img: 'images/cat3.png'});
		$scope.name = '';
		$scope.age = 0;
	};
}])
.directive('helloWorld', function(){
	return {
		template: 'Hello World'
	}
});
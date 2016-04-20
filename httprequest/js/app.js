(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  $scope.listaProfesores = {};

  $http.get('json/profesores.json').success(function(data){
  	//Codigo cuando es correcta la petición
  	$scope.listaProfesores = data.profesores;
  });
  



}]);





})();

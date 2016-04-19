(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	
		$scope.listado = ["Fernando Herrera", "Melisa Flores", "Pedro Daniel"];

		$scope.listadoProfesores = {
			profesores: [{
				nombre: "Pedro Daniel",
				edad: 27,
				clase: "Física cuántica avanzada"
			},
			{
				nombre: "Miguel Ulises",
				edad: 24,
				clase: "Filosofía"
			},
			{
				nombre: "Ivan Alberto",
				edad: 21,
				clase: "Matemáticas"
			}]
		}



}]);





})();

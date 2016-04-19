var app = angular.module('universidadApp', [ ]);

//Controlador Profesor
app.controller('profesorCtrl', function ($scope) {
	
	$scope.profesor = profesorData;
	$scope.editando = { };
	$scope.mostrarCaja = false;


	$scope.EditarProfesor = function(){
		angular.copy( $scope.profesor, $scope.editando );
		$scope.mostrarCaja = true;
	}

	$scope.GuardarCambios = function(){
		angular.copy( $scope.editando, $scope.profesor );
		$scope.mostrarCaja = false;
	}

	$scope.CancelarCambios = function(){
		$scope.editando = {};
		$scope.mostrarCaja = false;
	}

});

var profesorData = {
	nombre: "Pedro Daniel Rojas Corona",
	bio: "Saludos estudiante, mi nombre es Pedro Daniel, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 27,
	foto: "img/juancarlos.jpg"
}
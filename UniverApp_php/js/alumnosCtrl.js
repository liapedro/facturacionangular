app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mAlumnos");

	//Contendrá la lista de alumnos de nuestra base de datos
	$scope.alumnos = {};

	$http.get('php/servicios/alumnos.listado.php').success(function(data){
		$scope.alumnos = data;
	});


}]);
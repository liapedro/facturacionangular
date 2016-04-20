(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
  	$scope.geo ={};
  	// se utiliza jsonp para obtener información de archivos externos a nuestra carpeta
	$http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK')
		.success(function(data)
		{
			$scope.geo = data;
		});



}]);





})();

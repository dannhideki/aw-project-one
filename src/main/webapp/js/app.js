var app = angular.module("app", [ 'ngRoute', 'ngResource', 'ngMaterial']);
app.config(function($routeProvider){
    $routeProvider
        .when('/users',{
            templateUrl: 'views/users.html',
            controller: 'userController'
        })
        .when('/roles',{
            templateUrl: 'views/roles.html',
            controller: 'roleController'
        })
        .when('/teste',{
            templateUrl: 'views/teste.html',
            controller: 'testeController'
            	
        })
        .when('/medico',{
            templateUrl: 'views/medico.html',
            controller: 'medicoController'
        })
        .when('/paciente',{
	    		templateUrl:'views/paciente.html',
	    		controller:'pacienteController'
        })
        .when('/medicamento',{
	    		templateUrl:'views/medicamento.html',
	    		controller:'medicamentoController'
        })
        .otherwise(
            { redirectTo: '/'}
        );
});
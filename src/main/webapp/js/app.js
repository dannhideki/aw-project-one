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
        .otherwise(
            { redirectTo: '/'}
        );
});
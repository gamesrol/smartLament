var app = angular.module('ep', ["ngCookies",'ui.bootstrap','dialogs']);

app.config(['$routeProvider', function($routeProvider) {	
    $routeProvider.
       when('/', {
        templateUrl: 'partials/login.html',
        controller: 'login'
      }).when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'home'
      }).when('/propuestas', {
        templateUrl: 'partials/propuestas.html',
        controller: 'propuestas'
      }).when('/propuesta/:id', {
        templateUrl: 'partials/propuesta.html',
        controller: 'propuesta'
      }).when('/add', {
        templateUrl: 'partials/addPropuesta.html',
        controller: 'addPropuesta'
      }).when('/favoritos', {
        templateUrl: 'partials/favoritos.html',
        controller: 'propuestas'
      }).when('/opciones', {
        templateUrl: 'partials/opciones.html',
        controller: 'opciones'
      }).otherwise({
        redirectTo: '/'
      });
  }]);

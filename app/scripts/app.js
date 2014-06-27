'use strict';

angular
  .module('firebaseIntroApp', ['ngRoute','firebase'])
   .config(function ($routeProvider) {
   	$routeProvider
   	 .when('/', {
   	 	templateUrl: 'views/main.html',
   	 	controller: 'MainCtrl'
   	 })
   	 .otherwise({
   	 	redirectTo: '/'
   	 });
   });

'use strict';

/**
 * @ngdoc overview
 * @name gkTransportUiApp
 * @description
 * # gkTransportUiApp
 *
 * Main module of the application.
 */
angular
  .module('gkTransportUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/rest', {
        templateUrl: 'views/rest.html',
        controller: 'RestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

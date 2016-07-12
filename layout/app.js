(function() {
  'use strict';

  angular
    .module('weatherApp', ['ngRoute', 'angular-skycons'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
        templateUrl: '../weather-display/weather.html',
        controller: 'WeatherController'
      })
    })

})();

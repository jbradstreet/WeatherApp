(function() {
  'use strict';

  angular
    .module('weatherApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
        templateUrl: './weather-display/weather.html',
        controller: 'WeatherController'
      })
    })

})();

(function() {
  'use strict';

  angular
    .module('weatherApp')
    .controller('WeatherController', WeatherController)

    // weatherService is the name of my factory-service
    function WeatherController($scope, weatherService) {
      $scope.vm = {};

      weatherService.getData().then(function(data) {
        $scope.vm.weatherData = data;
      })


    }

})();

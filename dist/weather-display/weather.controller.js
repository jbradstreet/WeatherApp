(function() {
  'use strict';

  angular
    .module('weatherApp')
    .controller('WeatherController', WeatherController)

    // weatherService is the name of my factory-service
    function WeatherController(weatherService) {
      var vm = this;

       weatherService.getData().then(function(data) {
        vm.data = data;
        console.log(data);
      });
    }
})();

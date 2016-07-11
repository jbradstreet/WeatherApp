(function() {
  'use strict';

  angular
    .module('weatherApp')
    .controller('WeatherController', WeatherController)

    // weatherService is the name of my factory-service
    function WeatherController($scope, weatherService) {
      $scope.vm = {};
      $scope.vm.message = "Hello!";

      var example = weatherService.getData();
      $scope.vm.data = example;
      console.log($scope.vm.data);
      // removed ".then", not utilizing a promise in
      // .then(function(data) {
      //   $scope.vm.data = data;
      // })
    }

})();

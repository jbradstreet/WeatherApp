(function() {
  'use strict';

  angular
    .module('weatherApp')
    .controller('WeatherController', WeatherController)

    // weatherService is the name of my factory-service
    function WeatherController($scope, weatherService) {
      $scope.vm = {};
      $scope.vm.message = "Hello!";

      var data = weatherService.getData();
        $scope.vm.data = data;
        console.log(data);


      // $scope.vm.weatherIcon = {
      //   access weatherService data
      //   if ($scope.vm.data.$$state.value.daily[0].icon)
      //   forecast: {
      //     icon: "rain",
      //     iconSize: 50,
      //     color: "blue"
      //   }
      //   console.log($scope.vm.data);
      // };
    }

})();

(function() {
  'use strict';

  angular
    .module('weatherApp')
    .factory('weatherService', weatherService)

    function weatherService($http, $q) {
      var data = [];

      return {

        getData: function() {
          $http.get('https://api.forecast.io/forecast/API_KEY/47.6062,122.3321')
          .then(function(result) {
            console.log(result);
            data = result.data;
            console.log(data);
            return data;
          })
        // } else {
        //   return $q(function(resolve, reject) {
        //     resolve(data);
        //   });
        }
      }


    }

})();

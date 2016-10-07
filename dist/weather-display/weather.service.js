(function() {
  'use strict';

  angular
    .module('weatherApp')
    .factory('weatherService', weatherService)

    function weatherService($http) {
      var data = [];

      return {
        getData: function() {
          return $http.jsonp('https://api.forecast.io/forecast/a379801180042a5b59fa3c0034b64131/47.6062,-122.3321' + "?callback=JSON_CALLBACK")
          .then(function(result) {
            return result.data;
          });
        }
      }
    }
})();

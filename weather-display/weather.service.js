(function() {
  'use strict';

  angular
    .module('weatherApp')
    .factory('weatherService', weatherService)

    weatherService.$inject = ['$http', '$q']

    function weatherService($http, $q) {
      var data = [];

      return {
        getData: function() {
          var deferred = $q.defer();
          $http.jsonp('https://api.forecast.io/forecast/a379801180042a5b59fa3c0034b64131/47.6062,-122.3321' + "?callback=JSON_CALLBACK")
          .success(function(result) {
            deferred.resolve(result);
            data = result;
            console.log(data);
            return data;
          }, function(error) {
            deferred.reject(error);
          });
          return deferred.promise;
          }
        }
      }
})();


// } else {
//   return $q(function(resolve, reject) {
//     resolve(data);
//   });

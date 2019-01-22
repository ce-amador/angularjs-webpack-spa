(function() {
  "use strict";
  var svc = function($http) {

      this.getNGStatus = function(){
          return 'Main Service Working!';
      };

      this.getBucketsAlt = function() {
          return $http({
              method: 'GET',
              url: 'http://www.dinamotek.ca/sandbox/api/s3/buckets/'
          }).then(function successCallback(response) {
              return response.data;
          }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              console.log(response);
          });
      }

      this.getBuckets = function() {
          return $http.get('http://www.dinamotek.ca/sandbox/api/s3/buckets/')
              .then(function(response) {
                  return response.data;
              })
              .catch(function(response){
                  console.log(response.status);
              });
      }
  }

  svc.$inject = ['$http'];
  module.exports = svc;
})();

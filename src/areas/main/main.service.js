(function() {
  "use strict";
  var svc = function($http) {

      this.callImporter = function() {
          return $http.get('http://lenovo:83/api/importer/')
              .then(function(response) {
                  return response.data;
              })
              .catch(function(response){
                  console.log(response.status);
              });
      }

      this.getImporterStats = function() {
          return $http.get('http://lenovo:83/api/importer/stats/')
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

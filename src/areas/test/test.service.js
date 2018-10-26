(function() {
  "use strict";
  var svc = function($http) {

      this.getNGStatus = function(){
          return 'Test Service Working!!!';
      };

      this.getItems = function(statusID) {
          return $http
              .get('api/items')
              .then(function(response) {
                  return response.data;
              });
      };
  }

  svc.$inject = ['$http'];
  module.exports = svc;
})();

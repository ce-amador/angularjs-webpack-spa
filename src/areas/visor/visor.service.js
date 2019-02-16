(function() {
  "use strict";
  var svc = function($http) {

    this.getInitials = function() {
        return $http.get('http://lenovo:83/api/persons/initials')
            .then(function(response) {
                return response.data;
            })
            .catch(function(response){
                console.log(response.status);
            });
    }

    this.getPersons = function(initial) {
        return $http.get('http://lenovo:83/api/persons?initial=' + initial)
            .then(function(response) {
                return response.data;
            })
            .catch(function(response){
                console.log(response.status);
            });
    }

    this.getFiles = function(personID) {
        return $http.get('http://lenovo:83/api/persons/' + personID + '/files')
            .then(function(response) {
                return response.data;
            })
            .catch(function(response){
                console.log(response.status);
            });
    }

    this.updateFile = function(personFile) {
        return $http.put(
          'http://lenovo:83/api/personFiles/',
          JSON.stringify(personFile))
            .then(function(response) {
                consule.log(response.status);
            })
            .catch(function(response){
                console.log(response.status);
            });
    }
  }

  svc.$inject = ['$http'];
  module.exports = svc;
})();

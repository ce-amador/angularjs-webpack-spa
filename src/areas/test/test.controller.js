(function() {
  "use strict";

  var ctrl = function($scope, $sce, testService) {

    $scope.message = testService.getNGStatus();

    testService.getInitials().then(function(data) {
        $scope.initials = data;
    });

    $scope.getPersons = function(initial) {
      testService.getPersons(initial).then(function(data) {
          $scope.persons = data;
          $scope.files = null;
      });
    };

    $scope.getFiles = function(personID) {
      testService.getFiles(personID).then(function(data) {
          $scope.files = data;
      });
    };

    $scope.getFile = function(personFileID) {
      $scope.fileUrl = $sce.trustAsResourceUrl("http://lenovo:83/api/persons/files/" + personFileID);
    };
  }

  ctrl.$inject = ['$scope', '$sce', 'testService'];
  module.exports = ctrl;
})();

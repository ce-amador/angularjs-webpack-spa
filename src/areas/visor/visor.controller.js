(function() {
  "use strict";

  var ctrl = function($scope, $sce, visorService) {

    visorService.getInitials().then(function(data) {
        $scope.initials = data;
    });

    $scope.getPersons = function(initial) {
      visorService.getPersons(initial).then(function(data) {
          $scope.persons = data;
          $scope.files = null;
      });
    };

    $scope.getFiles = function(personID) {
      visorService.getFiles(personID).then(function(data) {
          $scope.files = data;
      });
    };

    $scope.getFile = function(file) {
      $scope.fileUrl = $sce.trustAsResourceUrl("http://lenovo:83/api/persons/files/" + file.personFileID);
      $scope.fileName = file.fileName;
    };
  }

  ctrl.$inject = ['$scope', '$sce', 'visorService'];
  module.exports = ctrl;
})();

(function() {
  "use strict";

  var ctrl = function($scope, $sce, visorService) {

    var loadingMessage = "Loading...";
    $scope.selectedFile;
    $scope.showVideo = false;
    $scope.editing = false;
    $scope.initialsMessage = loadingMessage;
    $scope.personsMessage = "";
    $scope.filesMessage = "";

    visorService.getInitials()
    .then(function(data) {
        $scope.initials = data;
        $scope.initialsMessage = "";
    });

    $scope.getPersons = function(initial) {
      $scope.personsMessage = loadingMessage;
      visorService.getPersons(initial).then(function(data) {
          $scope.personsMessage = "";
          $scope.persons = data;
          $scope.files = null;
          $scope.showVideo = false;
      });
    };

    $scope.getFiles = function(personID) {
      $scope.filesMessage = loadingMessage;
      visorService.getFiles(personID).then(function(data) {
          $scope.showVideo = false;
          $scope.filesMessage = "";
          $scope.files = data;
      });
    };

    $scope.getFile = function(file) {
      $scope.selectedFile = file;
      $scope.fileUrl = $sce.trustAsResourceUrl("http://lenovo:83/api/persons/files/" + file.personFileID);
      $scope.showVideo = true;
      //$scope.fileName = file.fileName;
    };

    $scope.updateFile = function() {
      visorService.updateFile($scope.selectedFile);
      $scope.editing = false;
      $scope.getFiles($scope.selectedFile.personID);
    };
  }

  ctrl.$inject = ['$scope', '$sce', 'visorService'];
  module.exports = ctrl;
})();

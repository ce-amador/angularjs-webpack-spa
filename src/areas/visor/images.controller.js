(function() {
  "use strict";

  var ctrl = function($scope, $sce, visorService) {

    var loadingMessage = "Loading...";
    $scope.selectedPersonID;
    $scope.showVideo = false;
    $scope.editing = false;
    $scope.initialsMessage = loadingMessage;
    $scope.personsMessage = "";
    $scope.foldersMessage = "";

    visorService.getInitials()
    .then(function(data) {
        $scope.initials = data;
        $scope.initialsMessage = "";
    });

    $scope.getPersons = function(initial) {
      $scope.personsMessage = loadingMessage;
      visorService.getPersonsWithImages(initial).then(function(data) {
          $scope.personsMessage = "";
          $scope.persons = data;
          //$scope.files = null;
          //$scope.showVideo = false;
      });
    };

    $scope.getFolders = function(personID) {
      $scope.filesMessage = loadingMessage;
      visorService.getFolders(personID).then(function(data) {
          $scope.foldersMessage = "";
          $scope.fileFolders = data;
          $scope.selectedPersonID = personID;
      });
    };

    $scope.getImages = function(folderName) {
      //$scope.filesMessage = loadingMessage;
      visorService.getImages($scope.selectedPersonID, folderName).then(function(data) {
          //$scope.foldersMessage = "";
          $scope.images = data;
      });
    };

    $scope.getImage = function(personFileID) {
      //$scope.filesMessage = loadingMessage;
      visorService.getImages($scope.selectedPersonID, folderName).then(function(data) {
          //$scope.foldersMessage = "";
          $scope.images = data;
      });
    };

    $scope.getImageLink = function(personFileID, thumbnail) {
      return "http://lenovo:83/api/persons/images/" + personFileID + (thumbnail ? "?thumbnail=true" : "x");
    };
  }

  ctrl.$inject = ['$scope', '$sce', 'visorService'];
  module.exports = ctrl;
})();

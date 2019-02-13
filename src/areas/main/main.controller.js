(function() {
  /*jshint -W097 */
  "use strict";
  var ctrl = function($scope, $interval, mainService) {

      var prevTotalFiles = -1;
      var intervalPromise;
      $scope.isProcessing = false;

      $scope.startImportProcess = function() {
          mainService.callImporter().then(function(data) {
              $scope.isProcessing = true;
              $scope.message = "Processing...";
              intervalPromise = $interval(callAtInterval, 2500);
          });
      }

      function callAtInterval() {
          mainService.getImporterStats().then(function(data) {
              $scope.stats = data;
          });
      }

      $scope.$watch('stats', function() {
          var totalFiles = getPersonFilesCount($scope.stats);
          if (totalFiles == prevTotalFiles) {
            $interval.cancel(intervalPromise);
            $scope.isProcessing = false;
            $scope.message = "";
          }
          else
            prevTotalFiles = totalFiles;
      });

      $scope.showImportStats = function() {
          callAtInterval();
      }

      function getPersonFilesCount(stats) {
          var totalFiles = 0;
          angular.forEach(stats, function(stat) {
            totalFiles += stat.personFilesCount;
          });
          return totalFiles;
      }
  }
  ctrl.$inject = ['$scope', '$interval', 'mainService'];
  module.exports = ctrl;
})();

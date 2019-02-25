(function() {
  /*jshint -W097 */
  "use strict";
  var ctrl = function($scope, $interval, $location, $anchorScroll, uiGridConstants, mainService) {

      $scope.stats = [];
      var prevTotalFiles = -1;
      var intervalPromise;
      callAtInterval();
      //$scope.isProcessing = false;

      $scope.startImportProcess = function() {
          mainService.callImporter().then(function(data) {
              $scope.isProcessing = true;
              $scope.message = "Processing...";
              intervalPromise = $interval(callAtInterval, 5000);
          });
      }

      function callAtInterval() {
          mainService.getImporterStats().then(function(data) {
              $scope.stats = data;
              $scope.gridOptions.data = $scope.stats;
              //$location.hash('bottom');
              //$anchorScroll();
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

      $scope.gridOptions = {
        //showGridFooter: true,
        showColumnFooter: true,
        //enableFiltering: true,
        columnDefs: [
            { field: 'initial', width: '25%', cellClass: 'text-center' },
            { field: 'personsCount', displayName: 'Persons', width: '25%', cellClass: 'text-right', footerCellClass: 'text-right', aggregationType: uiGridConstants.aggregationTypes.sum, aggregationHideLabel: true },
            { field: 'personFilesCount', displayName: 'Files', width: '25%', cellClass: 'text-right', footerCellClass: 'text-right', aggregationType: uiGridConstants.aggregationTypes.sum, aggregationHideLabel: true },
            { field: 'personImagesCount', displayName: 'Images', width: '25%', cellClass: 'text-right', footerCellClass: 'text-right', aggregationType: uiGridConstants.aggregationTypes.sum, aggregationHideLabel: true }
        ],
        data: $scope.stats,
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;
        }
      };
  }
  ctrl.$inject = ['$scope', '$interval', '$location', '$anchorScroll', 'uiGridConstants', 'mainService'];
  module.exports = ctrl;
})();

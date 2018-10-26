(function() {
  /*jshint -W097 */
  "use strict";
  var ctrl = function($scope, mainService) {

      $scope.message = mainService.getNGStatus();

      $scope.doSomething = function() {
          mainService.getBuckets().then(function(data) {
              $scope.message = data[0].bucketName;
          });

          mainService.getBucketsAlt().then(function(data) {
              console.log(data[0].bucketName);
          });
      }
  }
  ctrl.$inject = ['$scope', 'mainService'];
  module.exports = ctrl;
})();

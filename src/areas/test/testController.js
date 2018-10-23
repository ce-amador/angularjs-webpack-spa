(function() {
  "use strict";
  var ctrl = function($scope, testService) {
      $scope.message = testService.getNGStatus();
  }
  ctrl.$inject = ['$scope', 'testService'];
  module.exports = ctrl;
})();

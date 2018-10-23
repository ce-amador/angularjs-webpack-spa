(function() {

  "use strict";

  var routeConfig = function($routeProvider) {
      $routeProvider.caseInsensitiveMatch = true;
      $routeProvider.when('/', {
          controller: 'mainController',
          template: require('./areas/main/main.html')
      }).when('/test', {
          controller: 'testController',
          template: require('./areas/test/test.html')
      })
  };

  routeConfig.$inject = ['$routeProvider'];

  module.exports = routeConfig;

})();

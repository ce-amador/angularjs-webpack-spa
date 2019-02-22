(function() {

  "use strict";

  var routeConfig = function($routeProvider) {
      $routeProvider.caseInsensitiveMatch = true;
      $routeProvider.when('/', {
          controller: 'mainController',
          template: require('./areas/main/main.html')
      }).when('/visor', {
          controller: 'visorController',
          template: require('./areas/visor/visor.html')
      }).when('/images', {
          controller: 'imagesController',
          template: require('./areas/visor/images.html')
      })
  };

  routeConfig.$inject = ['$routeProvider'];

  module.exports = routeConfig;

})();

(function() {

  "use strict";

  var angular = require('angular');
  require('angular-route');
  require('bootstrap');
  //require('angular-ui-grid');

  var myApp = angular.module('myApp', ['ngRoute']);
  myApp.config(require('./routes'));

  // directives
  myApp.directive("menuDirective", require('./directives/menu.directive'));
  myApp.directive("headerDirective", require('./directives/header.directive'));

  // services
  myApp.service('visorService', ['$http', require('./areas/visor/visor.service')]);
  myApp.service('mainService', ['$http', require('./areas/main/main.service')]);

  // controllers
  myApp.controller('mainController', ['$scope', '$interval', '$location', '$anchorScroll', 'mainService', require('./areas/main/main.controller')]);
  myApp.controller('visorController', ['$scope', '$sce', 'visorService', require('./areas/visor/visor.controller')]);
  myApp.controller('imagesController', ['$scope', '$sce', 'visorService', require('./areas/visor/images.controller')]);

  // styles
  require('./styles/styles.css');
  require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

})();

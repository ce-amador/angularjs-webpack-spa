(function() {

  "use strict";

  var angular = require('angular');
  require('angular-route');
  require('bootstrap');

  var myApp = angular.module('myApp', ['ngRoute']);
  myApp.config(require('./routes'));

  // directives
  myApp.directive("menuDirective", require('./directives/menu.directive'));
  myApp.directive("headerDirective", require('./directives/header.directive'));

  // services
  myApp.service('testService', ['$http', require('./areas/test/test.service')]);
  myApp.service('mainService', ['$http', require('./areas/main/main.service')]);

  // controllers
  myApp.controller('mainController', ['$scope', 'mainService', require('./areas/main/main.controller')]);
  myApp.controller('testController', ['$scope', '$sce', 'testService', require('./areas/test/test.controller')]);

  // styles
  require('./styles/styles.css');
  require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

})();

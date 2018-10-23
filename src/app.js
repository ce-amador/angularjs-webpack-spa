(function() {

  "use strict";

  var angular = require('angular');
  require('angular-route');
  require('bootstrap');

  var myApp = angular.module('myApp', ['ngRoute']);
  myApp.config(require('./routes'));

  // directives
  myApp.directive("menuDirective", require('./directives/menuDirective'));
  myApp.directive("headerDirective", require('./directives/headerDirective'));

  // services
  myApp.service('testService', ['$http', require('./areas/test/testService')]);
  myApp.service('mainService', ['$http', require('./areas/main/mainService')]);

  // controllers
  myApp.controller('mainController', ['$scope', 'mainService', require('./areas/main/mainController')]);
  myApp.controller('testController', ['$scope', 'testService', require('./areas/test/testController')]);

  // styles
  require('./styles/styles.css');
  require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

})();

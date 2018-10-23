(function() {
  "use strict";
  module.exports = function() {
      return {
          restrict: 'E',
          scope: {
              title: '@' // simply reads the value (one-way binding)
              //message: '=' two-way binding
           },
          template: "<div class='jumbotron'><h1>{{ title }}</h1></div>"
      };
  };
})();

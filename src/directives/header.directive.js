(function() {
  "use strict";
  module.exports = function() {
      return {
          restrict: 'E',
          scope: {
              title: '@' // simply reads the value (one-way binding)
              //message: '=' two-way binding
           },
          template: "<h1><span class='badge badge-primary'>{{ title }}</span></h2>"
      };
  };
})();

'use strict';

angular.module('angular-validateContains', [])

  .directive('validateContains', function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      replace: true,
      scope: {
        validateContains: '='
      },
      link: function (scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function (value) {
          var valid;
          if (value && angular.isArray(scope.validateContains)) {
            // test and set the validity after update.
            valid = scope.validateContains.indexOf(value) > -1;
          }
          return valid ? value : undefined;
        });
      }
    };
  });

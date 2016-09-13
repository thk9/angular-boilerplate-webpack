(function (angular) {
  'use strict';

  angular.module('App')
    .directive('validateCaptcha', validateCaptchaDirective);

  /**
   * @ngdoc directive
   * @name App.directive:validateCaptcha
   * @restrict A
   * @scope
   *
   * @param {function} callback - Validate operation notify
   *
   * @description - validate telephone number
   */
  validateCaptchaDirective.$inject = [];
  function validateCaptchaDirective() {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        callback: '&'
      },
      link: function($scope, $element, $attr, $ctrl) {
        $ctrl.$validators.validTelNumber = function(value) {
          $scope.callback({value: value});
          return /[0-9]{11}/.test(value);
        };
      }
    };
  }
})(angular);
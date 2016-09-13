(function(angular) {
  'use strict';

  angular.module('App').filter('postfix', postfix);

  /**
   * @ngdoc filter
   * @name App.filter:postfix
   * @kind function
   *
   * @description - Add postfix after any param
   *
   * @param {string} origin - the primitive content
   * @param {string} [flag=!] - the postfix for concat
   * @return {string} - formatted content
   */
  postfix.$inject = [];
  function postfix() {
    return function(origin, flag) {
      return origin.toString() + (flag || '');
    };
  }
})(angular);
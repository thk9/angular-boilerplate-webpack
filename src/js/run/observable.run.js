(function (angular) {
  'use strict';
  
  angular.module('App').run(observableRunner);
  
  observableRunner.$inject = [];
  function observableRunner() {}
})(angular);
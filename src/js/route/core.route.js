(function (angular) {
  'use strict';
  
  angular.module('App').config(CoreRouter);
  
  CoreRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
  function CoreRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('authorize', {
        url: '/authorize',
        views: {
          'core': {
            templateUrl: 'template/authority/authorize.html'
          }
        }
      })
      .state('application', {
        url: '/application',
        views: {
          'navbar': {
            templateUrl: 'template/layout/navbar.html'
          },
          'sidebar': {
            templateUrl: 'template/layout/sidebar.html'
          },
          'core': {
            templateUrl: 'template/layout/core.html'
          }
        }
      });
    
    $urlRouterProvider.otherwise('/application');
  }
})(angular);
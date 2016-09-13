(function (angular) {
  'use strict';
  
  const ROLE = {
    ORG_MANAGER: 1,
    REGION_MANAGER: 2
  };
  
  angular.module('App').constant('ROLE', ROLE);
})(angular);
(function (angular) {
  'use strict';

  angular.module('App')
    .controller('ShowcaseController', ShowcaseController);

  /**
   * @ngdoc controller
   * @name App.controller:showcaseController
   *
   * @description - showcase manager control
   *
   * @requires App.service:prompt
   */
  ShowcaseController.$inject = ['prompt'];
  function ShowcaseController(prompt) {
    var vm = this;

    vm.handleAbnormalSituation = handleAbnormalSituation;

    /**
     * @ngdoc function
     * @name App.controller:showcaseController#handleAbnormalSituation
     * @methodOf App.controller:showcaseController
     *
     * @description - handle network fetch fail prompt
     *
     * @param {object} structure - Error definition
     */
    function handleAbnormalSituation(structure) {
      if (prompt.isValidPrompt(structure)) {
        vm.errorDesc = structure.errorDesc;
      } else {
        vm.errorDesc = 'Network Fetch Failed......';
      }
    }
  }
})(angular);
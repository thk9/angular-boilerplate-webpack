/**
 * @description - application level router config.
 * @author huang.jian <jian.huang03@ele.me>
 */

'use strict';

/**
 * @description - just default router direction
 */
export /* @ngInject */  function $stateProviderConfig($urlRouterProvider) {
  $urlRouterProvider.otherwise('/application');
}
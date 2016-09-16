/**
 * @description - application level router config.
 * @author huang.jian <jian.huang03@ele.me>
 */

'use strict';

/**
 * @description - just default router direction
 */
export function /* @ngInject */ $stateProviderConfig($urlRouterProvider) {
  $urlRouterProvider.otherwise('/application');
}
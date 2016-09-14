/**
 * @description - application level router config.
 * @author huang.jian <jian.huang03@ele.me>
 */

'use strict';

import { LayoutRouter } from '../layout/layout.route';

export function /* @ngInject */ $stateProviderConfig($stateProvider, $urlRouterProvider) {
  [...LayoutRouter].forEach((route) => {
    $stateProvider.state(route);
  });
  
  $urlRouterProvider.otherwise('/application');
}
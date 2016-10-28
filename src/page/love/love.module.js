/**
 * @description - collection sub-module level router config.
 * @author huang.jian <jian.huang03@ele.me>
 */

'use strict';

import { LoveRoute } from './love.route';

// share module name
const LOVE_MODULE = 'app.love';

angular.module(LOVE_MODULE, [])
// eslint-disable-next-line angular/di
  .config(['$stateProvider', function ($stateProvider) {
    LoveRoute.forEach((route) => {
      $stateProvider.state(route);
    });
  }]);

export { LOVE_MODULE };
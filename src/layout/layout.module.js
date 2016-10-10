/**
 * @description - application level router config.
 * @author bornkiller <hjj491229492@hotmail.com>
 */

'use strict';

import { LayoutRoute } from './layout.route';

// share module name
const LAYOUT_MODULE = 'app.layout';

angular.module(LAYOUT_MODULE, [])
  // eslint-disable-next-line angular/di
  // router config implement
  .config(['$stateProvider', function ($stateProvider) {
    LayoutRoute.forEach((route) => {
      $stateProvider.state(route);
    });
  }]);

export { LAYOUT_MODULE };
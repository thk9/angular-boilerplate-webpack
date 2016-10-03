/**
 * @description - application level router config.
 * @author bornkiller <hjj491229492@hotmail.com>
 */

'use strict';

import { LayoutRoute } from './layout.route';

// share module name
const LAYOUT_MODULE = 'app.layout';

let $stateProviderRef;

angular.module(LAYOUT_MODULE, [])
  // eslint-disable-next-line angular/di
  .config(['$stateProvider', function ($stateProvider) {
    $stateProviderRef = $stateProvider;
    // router config implement
    [...LayoutRoute].forEach((route) => {
      $stateProviderRef.state(route);
    });
  }]);

export { LAYOUT_MODULE };
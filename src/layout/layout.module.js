/**
 * @description - application level router config.
 * @author bornkiller <hjj491229492@hotmail.com>
 */

'use strict';

import { AuthorizeController } from './authority/authorize.controller';
import { SidebarController } from './flow/sidebar.controller';

// layout module name
const LAYOUT_MODULE = 'app.layout';

// layout module router
const LayoutRoute = [
  {
    name: 'authorize',
    url: '/authorize',
    views: {
      'core': {
        template: require('./authority/authorize.html'),
        controller: AuthorizeController,
        controllerAs: 'vm'
      }
    }
  },
  {
    name: 'application',
    url: '/application',
    views: {
      'navbar': {
        template: require('./flow/navbar.html')
      },
      'sidebar': {
        template: require('./flow/sidebar.html'),
        controller: SidebarController,
        controllerAs: 'vm'
      },
      'core': {
        template: require('./flow/core.html')
      }
    }
  }
];

angular.module(LAYOUT_MODULE, [])
  // eslint-disable-next-line angular/di
  .config(['$stateProvider', function ($stateProvider) {
    LayoutRoute.forEach((route) => {
      $stateProvider.state(route);
    });
  }]);

export { LAYOUT_MODULE };
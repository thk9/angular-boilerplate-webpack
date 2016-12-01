/**
 * @description - application level router config.
 * @author bornkiller <hjj491229492@hotmail.com>
 */

'use strict';

// layout module dependency
import layoutAuthorizeTemplate from './authority/authorize.html';
import { AuthorizeController } from './authority/authorize.controller';

import layoutNavbarTemplate from './flow/navbar.html';
import layoutSidebarTemplate from './flow/sidebar.html';
import layoutCoreTemplate from './flow/core.html';
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
        template: layoutAuthorizeTemplate,
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
        template: layoutNavbarTemplate
      },
      'sidebar': {
        template: layoutSidebarTemplate,
        controller: SidebarController,
        controllerAs: 'vm'
      },
      'core': {
        template: layoutCoreTemplate
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
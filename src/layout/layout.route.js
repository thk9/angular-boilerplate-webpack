'use strict';

/**
 * @description - layout router config
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

import { AuthorizeController } from './authority/authorize.controller';
import { SidebarController } from './flow/sidebar.controller';

// router rule declare
export const LayoutRoute = [
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

if (module.hot) {
  module.hot.accept(['./flow/sidebar.controller'], function() {
    let { SidebarController } = require('./flow/sidebar.controller');

    $hmr.hmrOnChange('RouteController', null, SidebarController);
    $hmr.hmrDoActive('RouteController', SidebarController);
  });

  module.hot.accept(['./authority/authorize.controller'], function() {
    let { AuthorizeController } = require('./authority/authorize.controller');

    $hmr.hmrOnChange('RouteController', null, AuthorizeController);
    $hmr.hmrDoActive('RouteController', AuthorizeController);
  });
  module.hot.accept(['./flow/navbar.html'], function() {
    $hmr.hmrOnChange('RouteTemplate', null, require('./flow/navbar.html'));
    $hmr.hmrDoActive('RouteTemplate', require('./flow/navbar.html'));
  });

  module.hot.accept(['./flow/sidebar.html'], function() {
    $hmr.hmrOnChange('RouteTemplate', null, require('./flow/sidebar.html'));
    $hmr.hmrDoActive('RouteTemplate', require('./flow/sidebar.html'));
  });

  module.hot.accept(['./flow/core.html'], function() {
    $hmr.hmrOnChange('RouteTemplate', null, require('./flow/core.html'));
    $hmr.hmrDoActive('RouteTemplate', require('./flow/core.html'));
  });

  module.hot.accept(['./authority/authorize.html'], function() {
    $hmr.hmrOnChange('RouteTemplate', null, require('./authority/authorize.html'));
    $hmr.hmrDoActive('RouteTemplate', require('./authority/authorize.html'));
  });
}
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
  module.hot.accept(['./flow/sidebar.html'], function () {
    let element = angular.element(document.body); // eslint-disable-line
    let $injector = element.injector();
    let template = require('./flow/sidebar.html');
    let $hmr = $injector.get('$hmr');
    let targetModuleName = 'application_sidebar_template';

    $hmr.notify(targetModuleName, template);
  });
}
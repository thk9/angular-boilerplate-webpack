/**
 * @description - layout router config
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
import { SidebarController } from './flow/sidebar.controller';

// router rule declare
export const LayoutRoute = [
  {
    name: 'authorize',
    url: '/authorize',
    views: {
      'core': {
        template: require('./authority/authorize.html')
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
  let element = angular.element(document.body); // eslint-disable-line
  
  module.hot.accept(['./flow/navbar.html', './flow/sidebar.html', './flow/core.html'], function () {
    let $injector = element.injector();
    
    if (!$injector) return;
    
    let $rootScope = $injector.get('$rootScope');
    let $state = $injector.get('$state');
    let target = $state.get('application');
    
    target.views.navbar.template = require('./flow/navbar.html');
    target.views.sidebar.template = require('./flow/sidebar.html');
    target.views.core.template = require('./flow/core.html');
    
    $state.reload('application');
    $rootScope.$apply();
  });
}
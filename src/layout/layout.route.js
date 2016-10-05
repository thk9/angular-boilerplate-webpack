/**
 * @description - layout router config
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

/* eslint-disable angular/document-service */
import _ from 'lodash';
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
  
  module.hot.accept(['./flow/sidebar.controller.js'], function () {
    let $injector = element.injector();
    
    if (!$injector) return;
    
    let { SidebarController } = require('./flow/sidebar.controller');
    
    let $rootScope = $injector.get('$rootScope');
    let target = angular.element(document.querySelector('aside'));
    let prevVM = target.scope().vm;
    let nextVM = $injector.instantiate(SidebarController);
    
    _.chain(nextVM).omit('$resolve').keys().value().forEach(key => {
      prevVM[key] = nextVM[key];
    });
    
    _.chain(Object.getOwnPropertyNames(nextVM.__proto__)).filter(key => key !== 'constructor').value().forEach(key => {
      prevVM.__proto__[key] = nextVM.__proto__[key];
    });
    
    $rootScope.$apply();
  });
  
  module.hot.accept(['./flow/sidebar.html'], function () {
    let $injector = element.injector();
    
    if (!$injector) return;
    
    let $rootScope = $injector.get('$rootScope');
    let $compile = $injector.get('$compile');
    let template = require('./flow/sidebar.html');
    let target = angular.element(document.querySelector('aside'));
    let scope = target.scope();
    
    let compiledTemplate = $compile(template)(scope);
    
    target.empty().append(compiledTemplate);
    $rootScope.$apply();
  });

  module.hot.accept(['./flow/navbar.html'], function () {
    let $injector = element.injector();
  
    if (!$injector) return;
  
    let $rootScope = $injector.get('$rootScope');
    let $compile = $injector.get('$compile');
    let template = require('./flow/navbar.html');
    let target = angular.element(document.querySelector('header'));
    let scope = target.scope();
  
    let compiledTemplate = $compile(template)(scope);
  
    target.empty().append(compiledTemplate);
    $rootScope.$apply();
  });
  
  module.hot.accept(['./flow/core.html'], function () {
    let $injector = element.injector();
    
    if (!$injector) return;
    
    let $rootScope = $injector.get('$rootScope');
    let $compile = $injector.get('$compile');
    let template = require('./flow/core.html');
    let target = angular.element(document.querySelector('article'));
    let scope = target.scope();
    
    let compiledTemplate = $compile(template)(scope);
    
    target.empty().append(compiledTemplate);
    $rootScope.$apply();
  });
}
'use strict';

/**
 * @description - layout router config
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

/* eslint-disable angular/document-service */
import _ from 'lodash';

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
  module.hot.accept(['./flow/sidebar.controller.js'], function () {
    let element = angular.element(document.body); // eslint-disable-line
    let $injector = element.injector();
    
    if (!$injector) return;
    
    let { SidebarController } = require('./flow/sidebar.controller');
    
    let target = angular.element(document.querySelector('#layout_sidebar'));
    let scope = target.scope();
    let prevVM = scope.vm;
    let nextVM = $injector.instantiate(SidebarController);
    let toString = Object.prototype.toString;
    
    // 假设所有关联属性在constructor内部声明
    // 且变量类型不变
    _.chain(nextVM).keys().value().forEach(key => {
      if (!_.has(prevVM, key) || toString.call(prevVM[key]) !== toString.call(nextVM[key])) {
        prevVM[key] = nextVM[key];
      }
    });
    
    _.chain(Object.getOwnPropertyNames(nextVM.__proto__)).filter(key => key !== 'constructor').value().forEach(key => {
      prevVM.__proto__[key] = nextVM.__proto__[key];
    });
  
    scope.$apply();
  });
  
  module.hot.accept(['./flow/navbar.html'], function () {
    let element = angular.element(document.body); // eslint-disable-line
    let $injector = element.injector();
    
    if (!$injector) return;
    
    let $compile = $injector.get('$compile');
    let template = require('./flow/navbar.html');
    let target = angular.element(document.querySelector('#layout_navbar'));
    let scope = target.scope();
    let compiledTemplate = $compile(template)(scope);
    
    target.empty().append(compiledTemplate);
    scope.$apply();
  });
  
  module.hot.accept(['./flow/sidebar.html'], function () {
    let element = angular.element(document.body); // eslint-disable-line
    let $injector = element.injector();
    
    if (!$injector) return;
    
    let $compile = $injector.get('$compile');
    let template = require('./flow/sidebar.html');
    let target = angular.element(document.querySelector('#layout_sidebar'));
    let scope = target.scope();
    
    for (let reflection of _template_storage) {
      template = template.replace(reflection[0], reflection[1]);
    }
    
    let compiledTemplate = $compile(template)(scope);
    
    target.empty().append(compiledTemplate);
    scope.$apply();
  });
  
  module.hot.accept(['./flow/core.html'], function () {
    let element = angular.element(document.body); // eslint-disable-line
    let $injector = element.injector();
    
    if (!$injector) return;
    
    let $compile = $injector.get('$compile');
    let template = require('./flow/core.html');
    let target = angular.element(document.querySelector('#layout_core'));
    let scope = target.scope();

    let middleware = $compile(template)(scope);
    let prevNestPage = $('#layout_page');

    middleware.find('#layout_page').replaceWith(prevNestPage);

    target.empty().append(middleware);
    scope.$apply();
  });
}
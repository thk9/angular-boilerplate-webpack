/**
 * @description - layout router config
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

import _ from 'lodash';

import { CollectionController } from './collection.controller';

// router rule declare
export const CollectionRoute = [
  {
    name: 'application.collection',
    url: '/collection',
    views: {
      'page': {
        template: require('./collection.html'),
        controller: CollectionController,
        controllerAs: 'vm'
      }
    }
  }
];

if (module.hot) {
  module.hot.accept(['./collection.controller.js'], function () {
    let element = angular.element(document.body); // eslint-disable-line
    let $injector = element.injector();

    if (!$injector) return;

    let { CollectionController } = require('./collection.controller');

    let target = angular.element(document.querySelector('#layout_sidebar'));
    let scope = target.scope();
    let prevVM = scope.vm;
    let nextVM = $injector.instantiate(CollectionController);
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

  module.hot.accept(['./collection.html'], function () {
    let element = angular.element(document.body); // eslint-disable-line
    let $injector = element.injector();

    if (!$injector) return;

    let $compile = $injector.get('$compile');
    let template = require('./collection.html');
    let target = angular.element(document.querySelector('#layout_page'));
    let scope = target.scope();

    for (let reflection of _template_storage) {
      template = template.replace(reflection[0], reflection[1]);
    }

    let middleware = $compile(template)(scope);

    target.empty().append(middleware);
    scope.$apply();
  });
}
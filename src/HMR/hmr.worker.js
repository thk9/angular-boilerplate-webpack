/**
 * @description - HMR implement, suppose satisfy hot condition
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

import { chain, has } from 'lodash';
import { analyzeModalIdentity, transformModalClass, huntModalSelector } from './hmr.warrior';

/* eslint-disable angular/document-service, angular/angularelement */

/**
 * @description - update modal instance template
 *
 * @param {function} $compile - Angular DI private
 * @param {string} template
 */
export function updateModalTemplate($compile, template) {
  let identity = analyzeModalIdentity(template);
  let additionalWindowClass = transformModalClass(identity);
  let rootModalSelector = `.${additionalWindowClass}`;
  let childModalSelector = huntModalSelector(additionalWindowClass);
  let scope = angular.element(document.querySelector(rootModalSelector)).scope();
  let target = angular.element(document.querySelector(childModalSelector));
  let middleware = $compile(template)(scope);

  target.empty().append(middleware);
}

/**
 * @description - update view instance template
 *
 * @param {function} $compile - Angular DI private
 * @param {string} viewName
 * @param {string} template
 */
export function updateViewTemplate($compile, viewName, template) {
  let selector = `[ui-view=${viewName}]`;
  let target = angular.element(document.querySelector(selector));
  let scope = target.scope();
  let middleware = $compile(template)(scope);
  let subViewTargets = middleware.find('[ui-view]');

  if (subViewTargets.length) {
    let subViewSelectors = subViewTargets.map(function () {
      let subViwName = $(this).attr('ui-view');

      return `[ui-view=${subViwName}]`;
    }).toArray();

    middleware = subViewSelectors.reduce(function (prev, selector) {
      prev.find(selector).replaceWith($(selector));

      return prev;
    }, middleware);
  }

  target.empty().append(middleware);
}

/**
 * @description - update view instance controller
 *
 * @param {function} $injector - Angular DI private
 * @param {string} viewName
 * @param {string} controller
 */
export function updateViewController($injector, viewName, controller) {
  let selector = `[ui-view=${viewName}]`;
  let target = document.querySelector(selector);
  let scope = angular.element(target).scope();
  let prevVM = scope.vm;
  let nextVM = $injector.instantiate(controller, {$scope: scope});
  let toString = Object.prototype.toString;

  // 假设所有关联属性在constructor内部声明,变量类型不变
  chain(nextVM).keys().value().forEach(key => {
    if (!has(prevVM, key) || toString.call(prevVM[key]) !== toString.call(nextVM[key])) {
      prevVM[key] = nextVM[key];
    }
  });

  chain(Object.getOwnPropertyNames(nextVM.__proto__)).filter(key => key !== 'constructor').value().forEach(key => {
    prevVM.__proto__[key] = nextVM.__proto__[key];
  });

  scope.$apply();
}

/**
 * @description - update modal instance controller
 *
 * @todo - implement
 */
export function updateModalController() {
}


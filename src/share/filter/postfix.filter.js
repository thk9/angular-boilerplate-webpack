'use strict';

/**
 * @ngdoc filter
 * @name App.filter:postfix
 * @kind function
 */
export /* @ngInject */ function bkPostfixFilter() {
  /**
   * @description - Add postfix after any param
   *
   * @param {string} origin - the primitive content
   * @param {string} [flag=!] - the postfix for concat
   * @return {string} - formatted content
   */
  return function (origin, flag) {
    return origin.toString() + (flag || '');
  };
}

/* eslint-disable */
// 普通过滤器热更新暂定为此
if (module.hot) {
  module.hot.accept();
  
  let element = angular.element(document.body);
  let $injector = element.injector();
  
  if ($injector) {
    $injector.register('bkPostfixFilter', $injector.invoke(bkPostfixFilter));
  
    let targets = document.querySelectorAll('[ng-bind*=bkPostfixPlaceholder]');
    
    if (targets.length) {
      targets.forEach((target) => {
        let uuid = Math.random().toString(36).substr(2, 9);
        let match = /bkPostfixPlaceholder(\w)*/;
        let template = target.outerHTML.replace(match, 'bkPostfixPlaceholder' + uuid);
        let scope = angular.element(target).scope();
        let middleware = $compile(template)(scope);
  
        _template_storage.set('bkPostfixPlaceholder', 'bkPostfixPlaceholder' + uuid);
        angular.element(target).replaceWith(middleware);
        scope.$apply();
      });
    }
  }
}
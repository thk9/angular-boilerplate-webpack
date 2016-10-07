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
    // return 'HMR filter update template trigger challenge...';
  };
}

/* eslint-disable */
// 普通过滤器热更新暂定为此
if (module.hot) {
  module.hot.accept();
  module.hot.data = module.hot.data || {};
  
  let element = angular.element(document.body); // eslint-disable-line
  let $injector = element.injector();
  
  if ($injector) {
    $filterProviderRef.register('bkPostfix', bkPostfixFilter);
  }
}
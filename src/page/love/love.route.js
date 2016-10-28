/**
 * @description - collection sub-module level router config.
 * @author huang.jian <jian.huang03@ele.me>
 */

'use strict';

// router rule declare
export const LoveRoute = [
  {
    name: 'application.love',
    url: '/love',
    views: {
      'page': {
        template: require('./love.html'),
        controllerAs: 'vm'
      }
    }
  }
];

/* eslint-disable angular/document-service */
if (module.hot) {
  module.hot.accept(['./love.html'], function () {
    let element = angular.element(document.body);
    let $injector = element.injector();
    let $hmr = $injector.get('$hmr');
    let targetModuleName = 'application.love_page_template';
    let template = require('./love.html');

    $hmr.notify(targetModuleName, template);
  });
}
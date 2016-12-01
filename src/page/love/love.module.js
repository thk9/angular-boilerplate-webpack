/**
 * @description - collection sub-module level router config.
 * @author huang.jian <jian.huang03@ele.me>
 */

'use strict';

// love module name
const LOVE_MODULE = 'app.love';

// love module router
const LoveRoute = [
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

angular.module(LOVE_MODULE, [])
// eslint-disable-next-line angular/di
  .config(['$stateProvider', function ($stateProvider) {
    LoveRoute.forEach((route) => {
      $stateProvider.state(route);
    });
  }]);

export { LOVE_MODULE };
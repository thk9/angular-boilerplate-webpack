/**
 * @description - collection sub-module level router config.
 * @author - bornkiller <hjj491229492@hotmail.com>
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
/**
 * @description - collection sub-module level router config.
 * @author huang.jian <jian.huang03@ele.me>
 */

'use strict';

import { TodoRoute } from './todo.route';

// share module name
const TODO_MODULE = 'app.collection';

angular.module(TODO_MODULE, [])
  // eslint-disable-next-line angular/di
  .config(['$stateProvider', function ($stateProvider) {
    TodoRoute.forEach((route) => {
      $stateProvider.state(route);
    });
  }]);

export { TODO_MODULE };
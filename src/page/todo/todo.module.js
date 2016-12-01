/**
 * @description - collection sub-module level router config.
 * @author huang.jian <jian.huang03@ele.me>
 */

'use strict';

import { TodoController } from './todo.controller';

// feature module name
const TODO_MODULE = 'app.collection';

// feature module router
const TodoRoute = [
  {
    name: 'application.todo',
    url: '/todo',
    views: {
      'page': {
        template: require('./todo.html'),
        controller: TodoController,
        controllerAs: 'vm'
      }
    }
  }
];

angular.module(TODO_MODULE, [])
  // eslint-disable-next-line angular/di
  .config(['$stateProvider', function ($stateProvider) {
    TodoRoute.forEach((route) => {
      $stateProvider.state(route);
    });
  }]);

export { TODO_MODULE };
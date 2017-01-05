/**
 * @description - collection sub-module level router config.
 * @author huang.jian <jian.huang03@ele.me>
 */

'use strict';

// feature module dependency
import todoPageTemplate from './core/todo.html';
import { TodoController } from './core/todo.controller';

// feature module name
const TODO_MODULE = 'app.todo';

// feature module router
const TodoRoute = [
  {
    name: 'application.todo',
    url: '/todo',
    views: {
      'page': {
        template: todoPageTemplate,
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
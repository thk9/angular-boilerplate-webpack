/**
 * @description - layout router config
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

import { TodoController } from './todo.controller';

// router rule declare
export const TodoRoute = [
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
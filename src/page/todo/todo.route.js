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

/* eslint-disable angular/document-service */
if (module.hot) {
  module.hot.accept(['./todo.html'], function () {
    let element = angular.element(document.body);
    let $injector = element.injector();
    let $hmr = $injector.get('$hmr');
    let targetModuleName = 'application.todo_page_template';
    let template = require('./todo.html');

    $hmr.notify(targetModuleName, template);
  });

  module.hot.accept(['./todo.controller.js'], function () {
    let element = angular.element(document.body);
    let $injector = element.injector();
    let $hmr = $injector.get('$hmr');
    let targetModuleName = 'application.todo_page_controller';
    let { TodoController } = require('./todo.controller');

    $hmr.notify(targetModuleName, TodoController);
  });
}
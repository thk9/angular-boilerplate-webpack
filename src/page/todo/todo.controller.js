/**
 * @description - collection feature controller
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

import * as TodoActions from './action.creator';
import { TodoModalController } from './todo.modal.controller';

/* @ngInject */
export class TodoController {
  constructor($q, $scope, $ngRedux, $uibModal) {
    this.$q = $q;
    this.$uibModal = $uibModal;

    let disconnect = $ngRedux.connect((state) => ({
      status: state.todo.view.status,
      list: state.todo.view.list
    }), TodoActions)(this);

    $scope.$on('$destroy', disconnect);
  }

  /**
   * @description - validate form status
   * @param person
   */
  handleTodoSubmit(person) {
    // validate person here
    this.requestCreateTodo(person);
  }

  displayPoemModal() {
    this.$uibModal.open({
      template: require('./todo.modal.html'),
      controller: TodoModalController,
      controllerAs: 'vm'
    });
  }
}

if (module.hot) {
  module.hot.accept(['./todo.modal.html'], function() {
    $hmr.hmrOnChange('ModalTemplate', null, require('./todo.modal.html'));
    $hmr.hmrDoActive('ModalTemplate', require('./todo.modal.html'));
  });

  module.hot.accept(['./todo.modal.controller'], function() {
    let { TodoModalController } = require('./todo.modal.controller');

    $hmr.hmrOnChange('ModalController', null, TodoModalController);
    $hmr.hmrDoActive('ModalController', TodoModalController);
  });
}
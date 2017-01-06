/**
 * @description - collection feature controller
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

import todoModalTemplate from '../modal/todo.modal.html';
import { TodoModalController } from '../modal/todo.modal.controller';

/* @ngInject */
export class TodoController {
  constructor($q, $scope, $ngRedux, $uibModal, todoActionDispatcher) {
    this.$q = $q;
    this.$uibModal = $uibModal;
    this.todoActionDispatcher = todoActionDispatcher;

    let disconnect = $ngRedux.connect((state) => ({
      status: state.todo.status,
      list: state.todo.list
    }))(this);

    $scope.$on('$destroy', disconnect);
  }

  /**
   * @description - validate form status
   * @param person
   */
  handleTodoSubmit(person) {
    // validate person here
    this.todoActionDispatcher.requestCreateTodo(person);
  }

  displayPoemModal() {
    this.$uibModal.open({
      template: todoModalTemplate,
      controller: TodoModalController,
      controllerAs: 'vm'
    });
  }
}
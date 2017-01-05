/**
 * @description - collection feature controller
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

import * as TodoActions from '../../../redux/todo/action.creator';

import todoModalTemplate from '../modal/todo.modal.html';
import { TodoModalController } from '../modal/todo.modal.controller';

/* @ngInject */
export class TodoController {
  constructor($q, $scope, $ngRedux, $uibModal) {
    this.$q = $q;
    this.$uibModal = $uibModal;
    this.TodoActions = TodoActions;

    let disconnect = $ngRedux.connect((state) => ({
      status: state.todo.status,
      list: state.todo.list
    }), TodoActions)(this);

    $scope.$on('$destroy', disconnect);
  }

  shouldFieldUpdate(field) {
    return this.TodoActions.hasOwnProperty(field);
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
      template: todoModalTemplate,
      controller: TodoModalController,
      controllerAs: 'vm'
    });
  }
}
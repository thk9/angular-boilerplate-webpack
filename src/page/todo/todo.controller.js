/**
 * @description - collection feature controller
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

import * as TodoActions from './action.creator';

/* @ngInject */
export class TodoController {
  constructor($q, $scope, $ngRedux, $uibModal) {
    this.$q = $q;
    this.$uibModal =$uibModal;

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
      template: require('./modal.html')
    });
  }
}

if (module.hot) {
  module.hot.accept(['./modal.html'], function () {
    let element = angular.element(document.body);
    let $injector = element.injector();
    let $hmr = $injector.get('$hmr');
    let template = require('./modal.html');

    $hmr.update(template);
  });
}
/**
 * @description - collection feature controller
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

import * as TodoActions from './action.creator';

/* @ngInject */
export class TodoController {
  constructor($q, $scope, $ngRedux) {
    this.$q = $q;

    let disconnect = $ngRedux.connect((state) => ({
      status: state.todo.view.status,
      list: state.todo.view.list
    }), TodoActions)(this);

    $scope.$on('$destroy', disconnect);
  }
}
/**
 * @description - love feature controller
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

'use strict';

export class LoveController {
  /* @ngInject */
  constructor($scope, $ngRedux, loveActionDispatcher) {
    this.loveActionDispatcher = loveActionDispatcher;

    let disconnect = $ngRedux.connect((state) => ({
      list: state.love
    }))(this);

    $scope.$on('$destroy', disconnect);
  }

  syncLoveConnection() {
  }
}
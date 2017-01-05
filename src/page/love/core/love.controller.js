/**
 * @description - love feature controller
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

'use strict';

export class LoveController {
  /* @ngInject */
  constructor($scope, $q, $ngRedux) {
    this.$q = $q;

    let disconnect = $ngRedux.connect((state) => ({
      list: state.love
    }))(this);

    $scope.$on('$destroy', disconnect);

    if (process.env.NODE_ENV !== 'Production') {
      this.whitelist = ['list'];
      this.shouldFieldUpdate = (field) => this.whitelist.includes(field);
    }
  }

  syncLoveConnection() {
  }
}
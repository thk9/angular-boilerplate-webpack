/**
 * @description - collection feature controller
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

/* @ngInject */
export class CollectionController {
  constructor($q, $scope, $ngRedux, CollectionActions) {
    this.$q = $q;

    let disconnect = $ngRedux.connect((state) => ({
      collection: state.collection
    }), CollectionActions)(this);

    $scope.$on('$destroy', disconnect);
  }
}
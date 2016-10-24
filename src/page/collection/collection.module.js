/**
 * @description - collection sub-module level router config.
 * @author huang.jian <jian.huang03@ele.me>
 */

'use strict';

import { CollectionRoute } from './collection.route';

import * as CollectionActions from './action.creator';

// share module name
const COLLECTION_MODULE = 'app.collection';

angular.module(COLLECTION_MODULE, [])
  // eslint-disable-next-line angular/di
  .config(['$stateProvider', function ($stateProvider) {
    CollectionRoute.forEach((route) => {
      $stateProvider.state(route);
    });
  }])
  .value('CollectionActions', CollectionActions);

export { COLLECTION_MODULE };
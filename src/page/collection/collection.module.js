/**
 * @description - collection sub-module level router config.
 * @author huang.jian <jian.huang03@ele.me>
 */

'use strict';

import { CollectionRoute } from './collection.route';

// share module name
const COLLECTION_MODULE = 'app.collection';

angular.module(COLLECTION_MODULE, [])
  // eslint-disable-next-line angular/di
  // router config implement
  .config(['$stateProvider', function ($stateProvider) {
    CollectionRoute.forEach((route) => {
      $stateProvider.state(route);
    });
  }]);

export { COLLECTION_MODULE };
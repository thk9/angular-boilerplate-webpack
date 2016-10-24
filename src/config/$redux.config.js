/**
 * @description - application level redux store config.
 * @author huang.jian <jian.huang03@ele.me>
 */

'use strict';

import { collectionReducer } from '../page/collection/action.reducer';

/**
 * @description - just redux store config
 */
export /* @ngInject */ function $reduxStoreConfig($ngReduxProvider) {
  $ngReduxProvider.createStoreWith(
    {collection: collectionReducer},
    ['APIMiddleware'],
    [window.__REDUX_DEVTOOLS_EXTENSION__()] // eslint-disable-line angular/window-service
  );
}
/**
 * @description - application level redux store config.
 * @author huang.jian <jian.huang03@ele.me>
 */

'use strict';

import { TodoRootReducer } from '../page/page.reducer';
/**
 * @description
 * - just redux store config
 * - to avoid unnecessary confuse, first argument structure {key: feature, value: feature root reducer}
 */
export /* @ngInject */ function $reduxStoreConfig($ngReduxProvider) {
  $ngReduxProvider.createStoreWith(
    {todo: TodoRootReducer},
    ['APIMiddleware', 'toastrMiddleware'],
    [window.__REDUX_DEVTOOLS_EXTENSION__()] // eslint-disable-line angular/window-service
  );
}
/**
 * @description - collection sub-module level router config.
 * @author huang.jian <jian.huang03@ele.me>
 */

'use strict';

import { $collectionRouterConfig } from './collection.route';

// share module name
const COLLECTION_MODULE = 'app.collection';

angular.module(COLLECTION_MODULE, []).config($collectionRouterConfig);

export { COLLECTION_MODULE };
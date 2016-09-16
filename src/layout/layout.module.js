/**
 * @description - application level router config.
 * @author huang.jian <jian.huang03@ele.me>
 */

'use strict';

import { $layoutRouterConfig } from './layout.route';

// share module name
const LAYOUT_MODULE = 'app.layout';

angular.module(LAYOUT_MODULE, []).config($layoutRouterConfig);

export { LAYOUT_MODULE };
/**
 * @description
 * 1. application entry
 * 2. never import none UMD package, like angular, angular-*
 * 3. import necessary UMD package, like moment, underscore
 * 4. use pure class in router controller declare, none-anonymous
 *
 * @since 2016/09/13
 */

'use strict';

import { $stateProviderConfig } from './config/$state.config';
import { $reduxStoreConfig } from './config/$redux.config';
import { APIMiddleware } from './redux/api.middleware';
import { toastrMiddleware } from './redux/toast.middleware';

import { SHARE_MODULE } from './share/share.module';
import { LAYOUT_MODULE } from './layout/layout.module';
import { TODO_MODULE } from './page/todo/todo.module';
import { LOVE_MODULE } from './page/love/love.module';

const dependencies = [
  'ui.router',
  'ui.bootstrap',
  
  'ngRedux',
  'ng-hmr',
  'ui-notification',
  
  LAYOUT_MODULE,
  SHARE_MODULE,
  TODO_MODULE,
  LOVE_MODULE
];

/**
 * @ngdoc overview
 * @name App
 *
 * @description - Angular boilerplate integrated module
 *
 */
angular.module('App', dependencies)
  .config($reduxStoreConfig)
  .config($stateProviderConfig)
  .factory('APIMiddleware', APIMiddleware)
  .factory('toastrMiddleware', toastrMiddleware);
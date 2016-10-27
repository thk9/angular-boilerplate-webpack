/**
 * @description
 * 1. application entry
 * 2. never import none UMD package, like angular, angular-*
 * 3. import necessary UMD package, like moment, underscore
 *
 * @since 2016/09/13
 */

'use strict';

import { $stateProviderConfig } from './config/$state.config';
import { $reduxStoreConfig } from './config/$redux.config';
import { APIMiddleware } from './redux/api.middleware';
import { toastrMiddleware } from './redux/toast.middleware';

import { LAYOUT_MODULE } from './layout/layout.module';
import { SHARE_MODULE } from './share/share.module';
import { TODO_MODULE } from './page/page.barrel';
import { HMR_MODULE } from './HMR/hmr.module';

const dependencies = [
  'ui.router',
  'ui.bootstrap',
  
  'ngRedux',
  'ui-notification',
  
  LAYOUT_MODULE,
  SHARE_MODULE,
  TODO_MODULE,
  HMR_MODULE
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
  .factory('toastrMiddleware', toastrMiddleware)
  .run(function ($state, $rootScope) {
    window.$state = $state;
    window.$rootScope = $rootScope;
  });
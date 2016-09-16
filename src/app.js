/**
 * @description
 * 1. application entry
 * 2. never import none UMD package, like angular, angular-*
 * 3. import necessary UMD package, like moment, underscore
 *
 * @since 2016/09/13
 */

import { $stateProviderConfig } from './config/$state.config';
import { LAYOUT_MODULE } from './layout/layout.module';
import { SHARE_MODULE } from './share/share.module';

/**
 * @ngdoc overview
 * @name App
 *
 * @description - Angular boilerplate integrated module
 *
 */
angular.module('App', ['ui.router', 'ui.bootstrap', SHARE_MODULE, LAYOUT_MODULE])
  .config($stateProviderConfig);
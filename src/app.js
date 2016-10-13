/**
 * @description
 * 1. application entry
 * 2. never import none UMD package, like angular, angular-*
 * 3. import necessary UMD package, like moment, underscore
 *
 * @since 2016/09/13
 */

import { $stateProviderConfig } from './config/$state.config';
import { $reduxStoreConfig } from './config/$redux.config';

import { LAYOUT_MODULE } from './layout/layout.module';
import { SHARE_MODULE } from './share/share.module';
import { COLLECTION_MODULE } from './page/page.barrel';

const dependencies = [
  'ui.router',
  'ui.bootstrap',
  
  'ngRedux',
  'ui-notification',
  
  LAYOUT_MODULE,
  SHARE_MODULE,
  COLLECTION_MODULE
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
  .config($stateProviderConfig);

if (module.hot) {
  angular.element(document).ready(() => {
    let element = angular.element(document.body); // eslint-disable-line
    let $injector = element.injector();
    let _get = $injector.get;
    let _storage = new Map();
    let _template_storage = new Map();

    $injector.register = _storage.set.bind(_storage);
    $injector.get = name => _storage.has(name) ? _storage.get(name) : _get(name);

    window.$injector = $injector;
    window.$rootScope = $injector.get('$rootScope');
    window.$compile = $injector.get('$compile');
    window._template_storage = _template_storage;
  });
}
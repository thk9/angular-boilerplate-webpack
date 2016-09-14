/**
 * @description - application entry
 * @since 2016/09/13
 */

import 'angular';

import 'angular-animate';
import 'angular-bootstrap';
import 'angular-ui-router';

import { $stateProviderConfig } from './config/$state.config';

/**
 * @ngdoc overview
 * @name App
 * @module App
 *
 * @requires ui.router
 *
 * @description - Angular boilerplate integrated module
 *
 */
angular.module('App', ['ui.router'])
  .config($stateProviderConfig);
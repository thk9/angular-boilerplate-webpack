/**
 * @description - manage action types
 * @type {string}
 */
'use strict';

import { bindActionCreators } from 'redux';
import { LOVE_DELETE } from './love.action';

export /* @ngInject */ function loveActionDispatcherFactory($ngRedux) {
  return bindActionCreators({ removeSpecificLove }, $ngRedux.dispatch);

  function removeSpecificLove(love) {
    return {
      type: LOVE_DELETE,
      payload: {
        id: love.id
      }
    };
  }
}
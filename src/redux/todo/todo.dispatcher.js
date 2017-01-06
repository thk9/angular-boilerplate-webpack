/**
 * @description - collection action creator
 */
'use strict';

import { bindActionCreators } from 'redux';
import { REMOTE_TODO_TYPES } from './todo.action';
import { API_BASE, API_REQUEST, API_TOAST } from '../middleware/symbol.enum';

export /* @ngInject */ function todoActionDispatcherFactory($ngRedux) {
  return bindActionCreators({
    requestPermissionInfo,
    requestCreateTodo
  }, $ngRedux.dispatch);

  function requestPermissionInfo() {
    return {
      type: API_TOAST,
      [API_TOAST]: {
        type: 'success',
        title: 'redux toast middleware',
        message: 'Let\'t fight with the redux rough things!!!'
      }
    };
  }

  function requestCreateTodo(person) {
    return {
      [API_REQUEST]: {
        types: REMOTE_TODO_TYPES,
        config: {
          url: `${API_BASE}/v2/todo`,
          method: 'POST',
          data: person
        }
      }
    };
  }
}
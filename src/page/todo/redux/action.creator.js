/**
 * @description - collection action creator
 */
'use strict';

import { REMOTE_TODO_TYPES } from './action.type';
import { API_BASE, API_REQUEST, API_TOAST } from '../../../redux/middleware/symbol.enum';

export function notifyPermissionInfo() {
  return {
    type: API_TOAST,
    [API_TOAST]: {
      type: 'success',
      title: 'redux toast middleware',
      message: 'Let\'t fight with the redux rough things!!!'
    }
  };
}

export function requestCreateTodo(person) {
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
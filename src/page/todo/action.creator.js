/**
 * @description - collection action creator
 */
'use strict';

import { REMOTE_TODO_TYPES } from './action.type';
import { API_BASE, API_REQUEST } from '../../redux/api.config';

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
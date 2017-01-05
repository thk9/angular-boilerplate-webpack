'use strict';

import {
  REMOTE_TODO,
  REMOTE_TODO_SUCCESS,
  REMOTE_TODO_ERROR,
  REMOTE_TODO_PRISTINE
} from './action.type';

export const INIT_STATE = {
  status: 'idle',
  list: []
};

export function todoRootReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case REMOTE_TODO:
      return {
        ...state,
        status: 'waiting'
      };
    case REMOTE_TODO_SUCCESS:
      return {
        ...state,
        status: 'success'
      };
    case REMOTE_TODO_ERROR:
      return {
        ...state,
        status: 'error'
      };
    case REMOTE_TODO_PRISTINE:
      return {
        ...state,
        status: 'idle'
      };
    default:
      return state;
  }
}
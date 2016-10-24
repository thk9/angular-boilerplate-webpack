'use strict';

import { REMOTE_COLLECTION_SUCCESS } from './action.type';

export const INIT_STATE = {
  status: 'waiting',
  list: []
};

export function collectionReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case REMOTE_COLLECTION_SUCCESS:
      return {
        ...state,
        status: 'success'
      };
    default:
      return state;
  }
}
/**
 * @description - collection action creator
 */
'use strict';

import { REMOTE_COLLECTION_TYPES } from './action.type';
import { API_BASE, API_REQUEST } from '../../redux/api.config';

export function requestRemoteCollection(person) {
  return {
    [API_REQUEST]: {
      types: REMOTE_COLLECTION_TYPES,
      config: {
        url: `${API_BASE}/v2/collection`,
        method: 'POST',
        data: person
      }
    }
  };
}
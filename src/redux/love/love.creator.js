/**
 * @description - manage action types
 * @type {string}
 */
'use strict';

import { LOVE_DELETE } from './love.action';

export function removeSpecificLove(love) {
  return {
    type: LOVE_DELETE,
    payload: {
      id: love.id
    }
  };
}
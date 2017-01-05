'use strict';

import { LOVE_ADD, LOVE_DELETE, LOVE_TOGGLE } from './love.action';

const INIT_LOVE = [
  {
    id: 1,
    className: 'alert-success',
    description: `Heads up! This alert needs your attention, but it's my favourite.`
  },
  {
    id: 2,
    className: 'alert-info',
    description: `Heads up! This alert needs your attention, but it's not super important.`
  },
  {
    id: 3,
    className: 'alert-warning',
    description: `Heads up! This alert needs your attention, but it's not super important.`
  },
  {
    id: 4,
    className: 'alert-danger',
    description: `Heads up! This alert needs your attention, but it's not super important.`
  }
];

export function loveRootReducer(state = INIT_LOVE, action) {
  switch (action.type) {
    case LOVE_ADD:
      return [action.payload, ...state];
    case LOVE_DELETE:
      return state.filter(love => (love.id !== action.payload.id));
    case LOVE_TOGGLE:
      return state.map(love => {
        return love.id === action.payload.id ? action.payload.className : love;
      });
    default:
      return state;
  }
}
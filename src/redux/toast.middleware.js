'use strict';

import { API_TOAST } from './api.config';

export function toastrMiddleware(Notification) {
  return store => next => action => { // eslint-disable-line
    if (action[API_TOAST]) {
      // show toast for information
      let {method, message} = action[API_TOAST];

      Notification[method](message);
    }

    // delegate next dispatcher
    return next(action);
  };
}
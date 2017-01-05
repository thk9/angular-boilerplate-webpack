'use strict';

import { API_TOAST } from './symbol.enum';

export /* @ngInject */ function toastrMiddleware(Notification) {
  // eslint-disable-next-line
  return store => next => action => {
    // the action exclusive, should not delegate next
    if (action[API_TOAST]) {
      let options = action[API_TOAST];

      return Notification[options.type](options);
    } else {
      // delegate next dispatcher
      return next(action);
    }
  };
}
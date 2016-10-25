'use strict';

import { API_REQUEST, API_TOAST } from './api.config';

export function APIMiddleware($http) {
  return store => next => action => { // eslint-disable-line
    if (!action[API_REQUEST]) return next(action);

    const {config, types} = action[API_REQUEST];
    const [request, requestSuccess, requestError] = types;

    next({type: request});

    $http(config)
      .then(resp => {
        next({
          type: requestSuccess,
          payload: resp.data
        });
      })
      .catch(() => {
        next({
          type: requestError,
          [API_TOAST]: {
            method: 'error',
            message: 'Network Failed.....'
          }
        });
      });
  };
}
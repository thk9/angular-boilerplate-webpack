'use strict';

import { API_REQUEST } from './api.config';

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
      .catch(err => {
        next({
          type: requestError,
          payload: err.data
        });
      });
  };
}
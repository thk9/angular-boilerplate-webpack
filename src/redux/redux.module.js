/**
 * @description - redux middleware and config
 * @author huang.jian <jian.huang03@ele.me>
 */
'use strict';

// redux middleware factory
import { httpMiddleware } from './middleware/http.middleware';
import { toastrMiddleware } from './middleware/toast.middleware';

// redux reducer combination
import { combineReducers } from 'redux';
import { todoRootReducer } from './todo/todo.reducer';
import { loveRootReducer } from './love/love.reducer';

// redux feature module dispatcher
import { todoActionDispatcherFactory } from './todo/todo.dispatcher';
import { loveActionDispatcherFactory } from './love/love.dispatcher';

const REDUX_MODULE = '@bk/redux-feature';
// root state reducer
const RootReducer = combineReducers({
  todo: todoRootReducer,
  love: loveRootReducer
});
// angular factory
const middleware = ['httpMiddleware', 'toastrMiddleware'];
// eslint-disable-next-line angular/window-service
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [];

angular.module(REDUX_MODULE, [])
  .factory('httpMiddleware', httpMiddleware)
  .factory('toastrMiddleware', toastrMiddleware)
  .factory('todoActionDispatcher', todoActionDispatcherFactory)
  .factory('loveActionDispatcher', loveActionDispatcherFactory)
  // eslint-disable-next-line angular/di
  .config(['$ngReduxProvider', function ($ngReduxProvider) {
    $ngReduxProvider.createStoreWith(RootReducer, middleware, enhancer);
  }]);

export { REDUX_MODULE };
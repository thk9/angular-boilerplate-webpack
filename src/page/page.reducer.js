/**
 * @description - entry feature module barrel
 */
'use strict';

import { combineReducers } from 'redux';
import { todoViewReducer } from './todo/action.reducer';

// export feature root reducer
export const TodoRootReducer = combineReducers({
  view: todoViewReducer
});

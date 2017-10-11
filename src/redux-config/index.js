import { applyMiddleware, combineReducers, createStore } from 'redux';
import { UserReducer } from '../features/users/reducers';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

const combinedReducers = combineReducers({
  users: UserReducer
});

export const appStore = createStore(combinedReducers, applyMiddleware(logger, thunk));


import { applyMiddleware, combineReducers, createStore } from 'redux';
import { UserReducer } from '../features/reducers';
import { logger } from 'redux-logger';

const combinedReducers = combineReducers({
  users: UserReducer
});

export const appStore = createStore(combinedReducers, applyMiddleware(logger));


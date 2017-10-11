import { applyMiddleware, combineReducers, createStore } from 'redux';
import { UserReducer } from '../features/users/reducers';
import { DynamicFormReducer } from '../features/dynamic-form/dynamic-form.reducer';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

const combinedReducers = combineReducers({
  users: UserReducer,
  formSchema: DynamicFormReducer
});

export const appStore = createStore(combinedReducers, applyMiddleware(logger, thunk));


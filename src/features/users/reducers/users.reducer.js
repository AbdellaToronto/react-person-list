import { ACTIONS } from '../actions/user.actions';

const DEFAULT_STATE = {
  list: [],
};

export const UserReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ALL_USERS:
      return {...state, list: action.payload};

    default:
      return state;
  }
};
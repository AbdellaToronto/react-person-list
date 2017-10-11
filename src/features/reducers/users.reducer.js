

const DEFAULT_STATE = {
  list: [
    {
      name: 'Della'
    },
    {
      name: 'Leah'
    },
    {
      name: 'Paul'
    },
    {
      name: 'Mary'
    },
    ]
};

export const UserReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS':
      return {...state, list: action.payload};

    case 'ADD_USER':
      return {...state, list: state.list.concat(action.payload)};

    default:
      return state;
  }
};
import * as axios from 'axios';

export const ACTIONS = {
  ADD_ALL_USERS: 'ADD_ALL_USERS'
};

export const getUsers = () => (dispatch) => {
  axios.get('https://next.json-generator.com/api/json/get/NJ8NIrwnX')
    .then(result => {
      dispatch({
        type: ACTIONS.ADD_ALL_USERS,
        payload: result.data
      })
    })

};
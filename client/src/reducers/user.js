import {
    GET_USERS,
    USER_ERROR,
    DELETE_USER
  } from '../actions/Types';
  
  const initialState = {

    loading: true,
    users: [],
    user: null,
  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case GET_USERS:
            return {
              ...state,
              users: payload,
              loading: false,
            };
            case DELETE_USER:
                return {
                  ...state,
                  users: state.users.filter((u) => u._id !== payload),
                  loading: false,
                };
            case USER_ERROR:
                return {
                  ...state,
                  error: payload,
                  loading: false,
                
                };
  
      default:
        return state;
    }
  }
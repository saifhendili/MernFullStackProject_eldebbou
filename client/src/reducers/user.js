import {
    GET_USERS,
    USER_ERROR,
    DELETE_USER,
    PUT_USER,
    CHANGE_PASSWORD,
    FORGET_PASSWORD,
    BLOCK_USER,
    UNBLOCK_USER
  } from '../actions/Types';
  
  const initialState = {

    loading: true,
    users: [],
    user: null,
  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case BLOCK_USER:
      case UNBLOCK_USER:
      case GET_USERS:
        return {
          ...state,
          users: payload,
          loading: false,
        };
        case GET_USERS:
            return {
              ...state,
              users: payload,
              loading: false,
            };
            case CHANGE_PASSWORD:
              return {
                ...state,
                users: payload,
                loading: false,
              };
              case PUT_USER:
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
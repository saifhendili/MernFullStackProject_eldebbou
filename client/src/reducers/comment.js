import {
    GET_COMMENT,
    ADD_COMMENT,
    REMOVE_COMMENT,
    COMMENT_ERROR
    } from '../actions/Types';
    
    const initialState = {
     loading: true,
     comments: [],
     error: {},
    };
    export default function (state = initialState, action) {
      const { type, payload } = action;
    
      switch (type) {
          case ADD_COMMENT:
              return {
                ...state,
                comments: payload,      
                loading: false,
              };
              case GET_COMMENT:
                return {
                  ...state,
                  comments: payload,
                  loading: false,
                };
              case REMOVE_COMMENT:
        return {
          ...state,
          comments: state.comments.filter((o) => o._id !== payload),
          loading: false,
        };
              case COMMENT_ERROR:
                  return {
                    ...state,
                    error: payload,
                    loading: false,
                  
                  };
    
        default:
          return state;
      }
    }
import {
    GET_PROPOSITION,
  PROPOSITION_ERROR,
  DELETE_PROPOSITION,
  ADD_PROPOSITION,
  GET_PROPOSITIONS


    } from '../actions/Types';
    
    const initialState = {
     loading: true,
     propositions: [],
     proposition:null,
     error: {},
    };
    export default function (state = initialState, action) {
      const { type, payload } = action;
    
      switch (type) {
          case ADD_PROPOSITION:
              return {
                ...state,
                propositions: payload,      
                loading: false,
              };
              case GET_PROPOSITIONS:
                return {
                  ...state,
                  propositions: payload,
                  loading: false,
                };
                // case GET_PROPOSITION:
                //     return {
                //       ...state,
                //       proposition: payload,
                //       loading: false,
                //     };
              case DELETE_PROPOSITION:
        return {
          ...state,
          propositions: state.comments.filter((o) => o._id !== payload),
          loading: false,
        };
              case PROPOSITION_ERROR:
                  return {
                    ...state,
                    error: payload,
                    loading: false,
                  
                  };
    
        default:
          return state;
      }
    }
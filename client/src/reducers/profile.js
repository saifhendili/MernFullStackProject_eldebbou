import {
    GET_MYPRODUCT,
    PROFILE_ERROR 
    } from '../actions/Types';
    
    const initialState = {
     loading: true,
      products: [],
      user: null,
      error: {},
    };
    export default function (state = initialState, action) {
      const { type, payload } = action;
    
      switch (type) {
        case GET_MYPRODUCT:
                return {
                  ...state,
                  products: payload,
                  loading: false,
                };
               
              case PROFILE_ERROR:
                  return {
                    ...state,
                    error: payload,
                    loading: false,
                  
                  };
    
        default:
          return state;
      }
    }
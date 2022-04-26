import {
    GET_MYPRODUCT,
    PROFILE_ERROR ,
    GET_SEARCH,GET_MYPRODUCT_USER
    } from '../actions/Types';
    
    const initialState = {
     loading: true,
      products: [],
      user: null,
      search:"",
      error: {},
    };
    export default function (state = initialState, action) {
      const { type, payload } = action;
    
      switch (type) {
        case GET_MYPRODUCT_USER:
          return {
            ...state,
            user: payload,
            loading: false,
          };
        case GET_SEARCH:
          return {
            ...state,
            search: payload,
          };
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
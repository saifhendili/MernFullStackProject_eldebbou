import {
  GET_PRODUCT_PANIER,
    GET_PANIER,
    REMOVE_PANIER,
    ADD_TO_PANIER,
    PANIER_ERROR
  } from '../actions/Types';
  
  const initialState = {
   loading: true,
    panier: [],
    product:null,
    error: {},
  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case ADD_TO_PANIER:
            return {
              ...state,
              panier: payload,
            
              loading: false,
            };
            case GET_PANIER:
              return {
                ...state,
                panier: payload,
                loading: false,
              };
            case REMOVE_PANIER:
      return {
        ...state,
        panier: state.panier.filter((o) => o._id !== payload),
        loading: false,
      };
            case PANIER_ERROR:
                return {
                  ...state,
                  error: payload,
                  loading: false,
                
                };
  
      default:
        return state;
    }
  }
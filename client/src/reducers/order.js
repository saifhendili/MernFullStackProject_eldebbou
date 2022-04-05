import {
    GET_ORDER,
    ADD_ORDER,
    REMOVE_ORDER,
    ORDER_ERROR,
    GET_ADDRESS
    } from '../actions/Types';
    
    const initialState = {
     loading: true,
     orders: [],
     address:null,
     order:null,
     error: {},
    };
    export default function (state = initialState, action) {
      const { type, payload } = action;
    
      switch (type) {
        case GET_ADDRESS:
            return{...state,address:payload,
                loading: false,
            
            }
          case ADD_ORDER:
              return {
                ...state,
                orders: payload,      
                loading: false,
              };
            //   case GET_PROPOSITIONS:
            //     return {
            //       ...state,
            //       propositions: payload,
            //       loading: false,
            //     };
                // case GET_PROPOSITION:
                //     return {
                //       ...state,
                //       proposition: payload,
                //       loading: false,
                //     };
           
    
        default:
          return state;
      }
    }
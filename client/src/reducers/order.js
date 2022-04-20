import {
    GET_ORDER,
    ADD_ORDER,
    REMOVE_ORDER,
    ORDER_ERROR,
    GET_ADDRESS,
    GET_ORDER_WITHOUT_DELIVERY,
    RESERVEORDER,
    CHANGE_STATE,
    MY_ORDERS_DELIVERY,
    ADD_ORDER_Exchange
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
            case ADD_ORDER_Exchange:
          case ADD_ORDER:
              return {
                ...state,
                orders: payload,      
                loading: false,
              };
              case RESERVEORDER:   
               return {
                ...state,
                order: payload,
                loading: false,
              };
              case GET_ORDER_WITHOUT_DELIVERY:
                case MY_ORDERS_DELIVERY:
                return {
                  ...state,
                  orders: payload,
                  loading: false,
                };
                case CHANGE_STATE:
                    return {
                      ...state,
                      order: payload,
                      loading: false,
                    };
           
    
        default:
          return state;
      }
    }
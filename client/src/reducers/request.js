import {
    GET_REQUEST_ORGANISATION,
    GET_REQUEST_DILEVRY,
    ACCEPT_Request_ORGANISATION,
    ACCEPT_Request_DELIVERY,
    REQUEST_ERROR,
 
    } from '../actions/Types';
    
    const initialState = {
     loading: true,
      organisations: [],
      deliverys: [],
      error: {},
    };
    export default function (state = initialState, action) {
      const { type, payload } = action;
    
      switch (type) {
        case ACCEPT_Request_ORGANISATION:
              case GET_REQUEST_ORGANISATION:
                return {
                  ...state,
                  organisations: payload,
                  loading: false,
                };
                case ACCEPT_Request_DELIVERY:
              case GET_REQUEST_DILEVRY:
                return {
                    ...state,
                    deliverys: payload,
                    loading: false,
                  };
              case REQUEST_ERROR:
                  return {
                    ...state,
                    error: payload,
                    loading: false,
                  
                  };
    
        default:
          return state;
      }
    }
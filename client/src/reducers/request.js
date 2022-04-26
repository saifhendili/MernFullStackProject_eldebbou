import {
    GET_REQUEST_ORGANISATION,
    GET_REQUEST_DILEVRY,
    ACCEPT_Request_ORGANISATION,
    ACCEPT_Request_DELIVERY,
    REQUEST_ERROR,
    GET_OPINIONS,ADD_REP
 
    } from '../actions/Types';
    
    const initialState = {
     loading: true,
      organisations: [],
      deliverys: [],
      opinions:[],
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
                  case GET_OPINIONS:
                    return {
                      ...state,
                      opinions: payload,
                      loading: false,
                    };
                    case ADD_REP:
                      return {
                        ...state,
                        opinions: payload,
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
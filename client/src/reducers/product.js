import {
    GET_PRODUCT,
  PRODUCT_ERROR,
    DELETE_PRODUCT,
    ADD_PRODUCTS,
    GET_PRODUCTS,
    GET_MY_EXCHANGE_PRODUCTS,
    RESERVEPRODUCT,
    P_ERROR,
    RECOMMENDED_SYS
  } from '../actions/Types';

  const initialState = {
   
    loading: true,
    products: [],
    product: null,
    error: {},
  };

    export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
      case RESERVEPRODUCT:
     case GET_MY_EXCHANGE_PRODUCTS:
      case RECOMMENDED_SYS:
        case GET_PRODUCTS:
          return {
            ...state,
            products: payload,
            loading: false,
          };
          case GET_PRODUCT:
            return {
              ...state,
              product: payload,
              loading: false,
            };
            case ADD_PRODUCTS:
                return {
                  ...state,
                  product: payload,
                  loading: false,
                };
                case DELETE_PRODUCT:
                    return {
                      ...state,
                      products: state.products.filter((product) => product._id !== payload),
                      loading: false,
                    };
                     case P_ERROR:
                    case PRODUCT_ERROR:
                        return {
                          ...state,
                  error: payload,
                  loading: false,
                
                        };
                        default:
                            return state;
         }
     }
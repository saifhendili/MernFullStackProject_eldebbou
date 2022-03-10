import {
    GET_WISHLISTS,
  REMOVE_WISHLIST,
  ADD_WISHLIST,
  WISHLIST_ERROR
  } from '../actions/Types';
  
  const initialState = {

    loading: true,
    wishlist: [],
    error: {},
  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case ADD_WISHLIST:
            return {
              ...state,
              wishlist: payload,
              loading: false,
            };
            case GET_WISHLISTS:
              return {
                ...state,
                wishlist: [payload, ...state.wishlist],
                loading: false,
              };
            case REMOVE_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter((o) => o._id !== payload),
        loading: false,
      };
            case WISHLIST_ERROR:
                return {
                  ...state,
                  error: payload,
                  loading: false,
                
                };
  
      default:
        return state;
    }
  }
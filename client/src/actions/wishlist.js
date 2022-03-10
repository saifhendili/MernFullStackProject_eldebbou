import axios from 'axios';
import { SetAlert } from './alert';
import {

  GET_PRODUCT_WISHLIST,
  GET_WISHLISTS,
  REMOVE_WISHLIST,
  ADD_WISHLIST,
  WISHLIST_ERROR
} from './Types';



export const GetWishLists = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/wishlist');

    dispatch({
      type: GET_WISHLISTS,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
    type: WISHLIST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const DeleteWishlist = (id) => async (dispatch) => {
    try {
      await axios.delete(`/api/wishlist/${id}`);
  
      dispatch({
        type: REMOVE_WISHLIST,
        payload: id,
      });
      dispatch(SetAlert('Product Removed', 'success'));
    } catch (err) {
      dispatch({
        type: WISHLIST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const Addwishlist = (id) => async (dispatch) => {
    try {
      const res = await axios.post(`/api/wishlist/${id}`);
  
      dispatch({
        type: ADD_WISHLIST,
        payload: res.data,
      });
  
    } catch (err) {
      dispatch({
      type: WISHLIST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  
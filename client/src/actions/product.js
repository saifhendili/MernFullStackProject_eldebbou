import axios from 'axios';
import { SetAlert } from './alert';
import {
  GET_PRODUCT,
PRODUCT_ERROR,
  UPDATE_PRODUCTS,
  DELETE_PRODUCT,
  ADD_PRODUCTS,
  GET_PRODUCTS,

} from './Types';

export const GetProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/product');

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
    type: PRODUCT_ERROR,
    //  payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};



  export const getProduct = (id) => async (dispatch) => {
    try {
      const res = await axios.get(`/api/product/${id}`);
  
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  export const deleteProduct = (id) => async (dispatch) => {
    try {
      await axios.delete(`/api/product/${id}`);
  
      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });
  
      dispatch(SetAlert('Product Removed', 'success'));
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  
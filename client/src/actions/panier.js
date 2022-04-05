import axios from 'axios';
import { SetAlert } from './alert';
import {
  GET_PRODUCT_PANIER,
  GET_PANIER,
  REMOVE_PANIER,
  ADD_TO_PANIER,
  PANIER_ERROR
} from './Types';

export const AddPanier = (id ) => async (dispatch) => {

    try {
    const res = await axios.post(`/api/panier/${id}`);
    dispatch({
      type: ADD_TO_PANIER,
      payload: res.data,
    });
    dispatch(SetAlert('Product Added', 'success'));

  } catch (err) {
    dispatch({
    type: PANIER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


export const GetPanier = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/panier/`);

    dispatch({
      type: GET_PANIER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
    type: PANIER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const DeleteFromPanier = (id) => async (dispatch) => {
    try {
      await axios.delete(`/api/panier/${id}`);
  
      dispatch({
        type: REMOVE_PANIER,
        payload: id,
      });
      dispatch(SetAlert('panier Removed', 'success'));
    } catch (err) {
      dispatch({
        type: PANIER_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

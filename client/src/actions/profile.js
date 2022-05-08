import axios from 'axios';
import { SetAlert } from './alert';
import {
   GET_MYPRODUCT,
   GET_MYPRODUCT_USER,
   GET_SEARCH,
   GET_SEARCH_PRODUCT,
   PROFILE_ERROR,
   
} from './Types';


export const getsearch = (payload) => (dispatch) => {
  dispatch({
    type: GET_SEARCH,
    payload,
  });
};

export const GetSearchProduct = (search) => async(dispatch) => {
  await axios.post('/api/users/get-search',{search});
  dispatch({
    type: GET_SEARCH_PRODUCT,
    payload:search,
  });
};

export const GetMyProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile/myproducts');

    dispatch({
      type: GET_MYPRODUCT,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
    type: PROFILE_ERROR,
    payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const GetprofileById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/users/myprofile/${id}`);

    dispatch({
      type: GET_MYPRODUCT_USER,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
    type: PROFILE_ERROR,
    payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
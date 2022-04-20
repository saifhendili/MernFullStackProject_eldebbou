import axios from 'axios';
import { SetAlert } from './alert';
import {
   GET_MYPRODUCT,
   PROFILE_ERROR
} from './Types';

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


import axios from 'axios';
import { SetAlert } from './alert';
import {

  GET_USERS,
  USER_ERROR,
  DELETE_USER
} from './Types';



export const GetUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/users');

    dispatch({
      type: GET_USERS,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
    type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
    try {
      await axios.delete(`/api/users/${id}`);
  
      dispatch({
        type: DELETE_USER,
        payload: id,
      });
      dispatch(SetAlert('Post Removed', 'success'));
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  
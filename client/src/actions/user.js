import axios from 'axios';
import { SetAlert } from './alert';
import {

  GET_USERS,
  USER_ERROR,
  DELETE_USER,
  PUT_USER,
  CHANGE_PASSWORD,
  CONVERSATION
} from './Types';



export const ChangePassword = ( formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(
      `/api/users/`,
      formData,
      config
    );

    dispatch({
      type: CHANGE_PASSWORD,
      payload: res.data,
    });

    dispatch(SetAlert('Password Changed', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
    }

    dispatch({
      type: USER_ERROR,
    });
  }
};

export const PutInfo = ( formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(
      `/api/auth/`,
      formData,
      config
    );

    dispatch({
      type: PUT_USER,
      payload: res.data,
    });

    dispatch(SetAlert('Information Updated', 'success'));
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


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
  

  export const Conversation = (formData) => async (dispatch) => {
 
    try {
      const res = await axios.post(
        `/api/conversations/`,
        formData,
        
      );
  
      dispatch({
        type: CONVERSATION,
      });
  
      dispatch(SetAlert('Conv Added', 'success'));
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
    
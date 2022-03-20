import axios from 'axios';
import { SetAlert } from './alert';
import {
    GET_COMMENT,
    ADD_COMMENT,
    REMOVE_COMMENT,
    COMMENT_ERROR
} from './Types';


// Add comment
export const addComment = (postId, formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/comment/${postId}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_COMMENT,
        payload: res.data,
      });
  
      dispatch(SetAlert('Comment Added', 'success'));
    } catch (err) {
      dispatch({
        type: COMMENT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  // Get post
export const getComment = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/comment/${id}`);

    dispatch({
      type: GET_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COMMENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
import axios from 'axios';
import { SetAlert } from './alert';
import {
    GET_ADDRESS,
    GET_ORDER,
    ADD_ORDER,
    REMOVE_ORDER,
    ORDER_ERROR
} from './Types';


export const addAddress =(payload)=>({
    type:GET_ADDRESS,
    payload
})


export const AddOrder = (formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        "/api/order",
        formData,
        config
      );
  
      dispatch({
        type: ADD_ORDER,
        payload: res.data,
      });
  
      dispatch(SetAlert('Comment Added', 'success'));
    } catch (err) {
      dispatch({
        type: ORDER_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
     //   SetAlert('Comment Added', 'danger')
      });
    }
  };


//   // Get post
// export const getComment = (id) => async (dispatch) => {
//   try {
//     const res = await axios.get(`/api/comment/${id}`);

//     dispatch({
//       type: GET_COMMENT,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: COMMENT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };
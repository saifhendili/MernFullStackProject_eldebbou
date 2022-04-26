import axios from 'axios';
import { SetAlert } from './alert';
import {
    GET_REQUEST_ORGANISATION,
    GET_REQUEST_DILEVRY,
    ACCEPT_Request_ORGANISATION,
    ACCEPT_Request_DELIVERY,
    REQUEST_ERROR,
    BLOCK_USER,
    UNBLOCK_USER,
    GET_OPINIONS,
    ADD_REP
} from './Types';

export const GetRequestsOrganisation = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/requestUser/Organisation');

    dispatch({
      type: GET_REQUEST_ORGANISATION,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
    type: REQUEST_ERROR,
    //  payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};




  export const GetRequestsDelivery = () => async (dispatch) => {
    try {
      const res = await axios.get('/api/requestUser/delivery');
  
      dispatch({
        type: GET_REQUEST_DILEVRY,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REQUEST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  export const AcceptRequest = (id) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/requestUser/accept-organisation/${id}`);
        dispatch({
            type: ACCEPT_Request_ORGANISATION,
            payload: res.data,
          });
          dispatch(SetAlert('Product Added', 'success'));
      
    } catch (err) {
      dispatch({
      type: REQUEST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  
  export const AcceptRequestDelivery = (id) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/requestUser/accept-delivery/${id}`);
        dispatch({
            type: ACCEPT_Request_DELIVERY,
            payload: res.data,
          });
          dispatch(SetAlert('Product Added', 'success'));
      
    } catch (err) {
      dispatch({
      type: REQUEST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  export const BlockUser = (id) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/requestUser/block/${id}`);
        dispatch({
            type: BLOCK_USER,
            payload: res.data,
          });
          dispatch(SetAlert('User Blocked', 'success'));
      
    } catch (err) {
      dispatch({
      type: REQUEST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  
  export const UnBlockUser = (id) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/requestUser/unblock/${id}`);
        dispatch({
            type: UNBLOCK_USER,
            payload: res.data,
          });
          dispatch(SetAlert('User Blocked', 'success'));
      
    } catch (err) {
      dispatch({
      type: REQUEST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const GetQuestion = () => async (dispatch) => {
    try {
      const res = await axios.get('/api/AddIntent');
  
      dispatch({
        type: GET_OPINIONS,
        payload: res.data,
      });
  
    } catch (err) {
      dispatch({
      type: REQUEST_ERROR,
      //  payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  
  
  export const AddRep =( id,rep) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
        
      const res = await axios.delete(`/api/AddIntent/add/${id}/${rep}`,
      config
      
    );
      dispatch({
        type: ADD_REP,
        payload: res.data,
      });

    } catch (err) {
      dispatch({
      type: REQUEST_ERROR,
        // payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
import axios from 'axios';
import { SetAlert } from './alert';
import {
    GET_ADDRESS,
    GET_ORDER,
    ADD_ORDER_Exchange,
    ADD_ORDER,
    REMOVE_ORDER,
    ORDER_ERROR,
    GET_ORDER_WITHOUT_DELIVERY,
    RESERVEORDER,
    CHANGE_STATE,
    MY_ORDERS_DELIVERY,
    RESERVEPRODUCT,P_ERROR
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


  // Get free ORDERS 
export const getOrdersFree = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/order/all-orders-without-delivery`);

    dispatch({
      type: GET_ORDER_WITHOUT_DELIVERY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};



export const ReserveOrder = (id) => async (dispatch) => {
  try {
    const res = await axios.put( `/api/order/reserve-order/${id}`,
  
    );

    dispatch({
      type: RESERVEORDER,
      payload: res.data,
    });

    dispatch(SetAlert('Order Reserved', 'success'));
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


export const CondirmedState = ( id) => async (dispatch) => {
  try {
    const res = await axios.put( `/api/order/state-order/${id}`);

    dispatch({
      type: CHANGE_STATE,
      payload: res.data,
    });

    dispatch(SetAlert('Order Changed', 'success'));
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const MyOrdersDelivery = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/order/myorders`);

    dispatch({
      type: MY_ORDERS_DELIVERY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


export const AddOrderExchange = (id,idproposition) => async (dispatch) => {
  

  try {
    const res = await axios.post(
      `/api/propositions/acceptExchange/${id}/${idproposition}`,
      
    );

    dispatch({
      type: ADD_ORDER,
      payload: res.data,
    });

    dispatch(SetAlert('Ordre Added', 'success'));
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
   //   SetAlert('Comment Added', 'danger')
    });
  }
};




export const ReserveOrderDonation = (id) => async (dispatch) => {
  

  try {
    const res = await axios.post(
      `/api/order/reservationdonation/${id}`,  
    );

    dispatch({
      type: RESERVEPRODUCT,
      payload: res.data,
    });

    // dispatch(SetAlert('Ordre Added', 'success'));
  } catch (err) {
   console.log(err)
  }
};

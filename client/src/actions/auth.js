import axios from 'axios';
import { SetAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_PROFILE,
  LOGOUT,
  REQUEST_ORGANISATION,
  REQUEST_DELIVERY,
  CONFIRME_REQUEST
} from './Types';
import setAuthToken from '../utils/setAuthToken';
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth/me');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};




export const register = ({
  firstname,
  lastname,
  email,
  city,
  password,
  password2,
  birthday,
  Role,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    firstname,
    lastname,
    email,
    city,
    password,
    password2,
    birthday,
    Role,
  });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};





export const RequestOrganisation = ( formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(
      `/api/requestUser/organisation`,
      formData,
      config
    );

    dispatch({
      type: REQUEST_ORGANISATION,
      payload: res.data,
    });

    dispatch(SetAlert('RequestSent', 'success'));
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    // dispatch(SetAlert('RequestSent', 'danger'));

  }
};



export const RequestDelivery = ( formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(
      `/api/requestUser/delivery`,
      formData,
      config
    );

    dispatch({
      type: REQUEST_DELIVERY,
      payload: res.data,
    });

    dispatch(SetAlert('RequestSent', 'success'));
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    // dispatch(SetAlert('RequestSent', 'danger'));

  }
};




import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REQUEST_ORGANISATION,
    REQUEST_DELIVERY,
    CONFIRME_REQUEST
  } from '../actions/Types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false,
        };
      case REQUEST_ORGANISATION:
        return {
          ...state,
          isAuthenticated: true,
          user: payload,
          loading: false,
        };
      case REQUEST_DELIVERY:
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          user: payload,
          loading: false,
        };
  
      case REGISTER_FAIL:
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
        };
  
      default:
        return state;
    }
  }
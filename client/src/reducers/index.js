import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth.js';

export default combineReducers({

  auth,
  alert
});
import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth.js';
import product from './product'
import user from './user';

import 'bootstrap/dist/css/bootstrap.min.css';
import wishlist from './wishlist';

export default combineReducers({

  auth,
  alert,
  product,
  user,
  wishlist
});
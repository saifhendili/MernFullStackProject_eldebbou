import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth.js';
import product from './product'
import user from './user';
import 'bootstrap/dist/css/bootstrap.min.css';
import wishlist from './wishlist';
import panier from './panier';
import comment from './comment';
import proposition from './proposition';
import order from './order';
import request from './request';
import profile from './profile';
import message from './message_reducer';

export default combineReducers({

  auth,
  alert,
  product,
  user,
  wishlist,
  panier,
  comment,
  proposition,
  order,
  request,profile,
  message
  
});
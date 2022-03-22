import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Component/Layout/Navbar';
import Alert from './Component/Layout/Alert';
import Register from './Component/Auth/Register';
import Login from './Component/Auth/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './Component/routing/PrivateRoute';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import IndexAdmin from './Component/Admin/IndexAdmin';
// import Home from './Component/Frontoffice/Home';
import ListeUser from './Component/Admin/Liste-User/ListeUser';
import ListProduct from './Component/Frontoffice/Product/ListProduct/ListProduct';
import DetailProduit from './Component/Frontoffice/Product/DetailProduit/DetailProduit';

import Wishlist from './Component/Frontoffice/Wishlist/Wishlist';
import ContenuChat from './Component/Admin/Chat/ContenuChat';
import AddProduct from './Component/Frontoffice/Product/AddProduct/AddProduct';
import MainCard from './Component/Card/MainCard';
import ProfileMain from './Component/Frontoffice/Profile/ProfileMain';
import ForgetPassword from './Component/Auth/ForgetPassword';
import ChangePossword from './Component/Frontoffice/Profile/ChangePossword';
import CheckYourEmail from './Component/Auth/CheckYourEmail';
import ResetPassword from './Component/Auth/ResetPassword';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
 
    
    <Provider store={store}>
      
    <Router>
    <Alert className='aaa' />
    <Navbar />
       <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
               <PrivateRoute exact path='/dashboard' component={Dashboard} />
               {/* <Route exact path='/home' component={Home} /> */}
               <Route exact path='/listeuser' component={ListeUser} />
               <Route exact path='/listeproduct' component={ListProduct} />
               <Route path='/chat' component={ContenuChat}/>
               <Route path="/myproduct" component={DetailProduit} />
               <PrivateRoute path="/wishlist" component={Wishlist}/>
               <PrivateRoute path="/card" component={MainCard}/>
               <PrivateRoute path="/addproduct" component={AddProduct} />
               <PrivateRoute path='/profile' component={ProfileMain}/>
               <Route path="/forgetpassword" component={ForgetPassword} />
               <PrivateRoute path='/changepassword' component={ChangePossword}/>
               
               <Route path="/check" component={CheckYourEmail} />
               <Route path="/passwordreset" component={ResetPassword} />

               
        </Router>
  {/* <Footer/> */}
  </Provider>  
  );
};
export default App;

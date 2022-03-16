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
import Home from './Component/Frontoffice/Home';
import ListeUser from './Component/Admin/Liste-User/ListeUser';
import ListProduct from './Component/Frontoffice/Product/ListProduct/ListProduct';
import DetailProduit from './Component/Frontoffice/Product/DetailProduit/DetailProduit';
import Navbarr from './Component/Frontoffice/Navbar'
import Footer from './Component/Frontoffice/Footer'
import Wishlist from './Component/Frontoffice/Wishlist/Wishlist';
import ContenuChat from './Component/Admin/Chat/ContenuChat';
import AddProduct from './Component/Frontoffice/Product/AddProduct/AddProduct';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    // <Provider store={store}>
    //   <Router>
    //     <Fragment>
    //       <Navbar />
          
    //       {/* <Route exact path='/' component={Landing} /> */}
    //       <section className='container'>
    //         <Alert className='aaa' />
    //         <Switch>
    //       {/* /    <Route path="/" component={IndexAdmin}/> */}
    //           <Route exact path='/register' component={Register} />
    //           <Route exact path='/login' component={Login} />
    //           <PrivateRoute exact path='/dashboard' component={Dashboard} />
    //           <Route exact path='/home' component={Home} />
              
    //         </Switch>
    //       </section>
    //     </Fragment>
    //   </Router>
    // </Provider>
    
    <Provider store={store}>
      
    <Router>
    <Alert className='aaa' />
    <Navbar />
    <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
               <PrivateRoute exact path='/dashboard' component={Dashboard} />
               <Route exact path='/home' component={Home} />
               <Route exact path='/listeuser' component={ListeUser} />
               <Route exact path='/listeproduct' component={ListProduct} />
               <Route path='/chat' component={ContenuChat}/>
               <Route path="/myproduct" component={DetailProduit} />
                <PrivateRoute path="/wishlist" component={Wishlist}/>
              <Route path="/addproduct" component={AddProduct} />

               
               
  {/* <Navbarr /> */}
  {/* <FrontListProducts/> */}
  {/* <Footer/> */}
  </Router>
  {/* <Footer/> */}
  </Provider>  
  );
};
export default App;

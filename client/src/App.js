import React, { Fragment, useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Layout/Navbar';
import Alert from './Component/Layout/Alert';
import Register from './Component/Auth/Register';
import Login from './Component/Auth/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import { Provider } from 'react-redux';
import store from './store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Switch from 'react-switch';
import Camera from './Component/Frontoffice/Emotion/components/Camera/Camera';
import PrivateRoute from './Component/routing/PrivateRoute';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import IndexAdmin from './Component/Admin/IndexAdmin';


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
import PlaceOrder from './Component/Frontoffice/Order/PlaceOrder';
import Address from './Component/Frontoffice/Order/Adress';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Home from './Component/Frontoffice/Home';
import RequestOrganisation from './Component/Admin/Liste-User/RequestOrganisation';
import RequestDelivery from './Component/Admin/Liste-User/RequestDelivery';
import MyProfile from './Component/Frontoffice/Profile/MyProfile';
import MyOrders from './Component/Frontoffice/Delivey/MyOrders';
import Pricing from './Component/Frontoffice/Delivey/Pricing.js/Pricing';
import MyExchangeProduct from './Component/Frontoffice/Product/ExchangeProduct/MyExchangeProduct';
import PropositionOfProducts from './Component/Frontoffice/Product/ExchangeProduct/PropositionOfProducts';
import Chatbott from './Component/chat/chatbot';
import "./App.css";

import ListQuestion from './Component/Admin/ListQuestion/ListQuestion';
import Chatbot from './Component/Frontoffice/Chatbot/Chatbot';
import Messenger from './Component/Admin/Chat/messenger/Messenger';
import Allprofile from './Component/Frontoffice/AllProfiles/Allprofile';
import ProfileUsers from './Component/Frontoffice/AllProfiles/ProfileUsers';
import { loadModels } from './Component/Frontoffice/Emotion/helpers/faceApi';
import { createFaLibrary } from './Component/Frontoffice/Emotion/helpers/icons';
import PlaceOrderPremuim from './Component/Frontoffice/Delivey/Pricing.js/PlaceOrderPremuim';
import SearchProduct from './Component/Frontoffice/Product/SearchProduct/SearchProduct';
import Recommandedmain from './Component/Frontoffice/RecommandedSys/Recommandedmain';

createFaLibrary();
loadModels();
const promise = loadStripe(
  "pk_test_51KkJdXAKTcryk5ZvXAWqFdeIfD4AW1jvV7yj77K71hUvhGs7hWA8NgONxPl6vsOOYL8yUASXEmUylZtHAqT29p5900JoIJ33lZ"
);

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App () {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const [mode, setMode] = useState(false); //true = photo mode; false = video mode

  return (
 
    
    <Provider store={store}>
      
    <Router>
    <Alert className='aaa' />
    <Navbar />
    <Chatbot/>
    {/* <Chatbott/> */}
    <Routes>
       <Route exact path='/register' element={<Register/>} />
              <Route exact path='/login' element={<Login/>} />
               <Route path='/' element={<Home/>} />
               
               <Route exact path='/listquestion' element={<ListQuestion/>} />

               
               <Route exact path='/listeuser' element={<ListeUser/>} />
               <Route exact path='/listeproduct' element={<ListProduct/>} />
               <Route path='/chat' element={<ContenuChat/>}/>
               <Route path="/myproduct" element={<DetailProduit/>} />
               <Route path="/emotion" element={ <PrivateRoute><Camera photoMode={mode} /></PrivateRoute>}/>

            <Route path="/chatbot"element={<Chatbot/>} />
               {/* <PrivateRoute path='/payment' element={ <Elements stripe={promise}>
    <PlaceOrder />
    </Elements>} /> */}
      <Route
            path="/payment"
            element={
         <PrivateRoute>     <Elements stripe={promise}>
            < PlaceOrder/>
              </Elements></PrivateRoute>
            }
          />
        


               <Route path="/myprofile" element={ <PrivateRoute><MyProfile/></PrivateRoute>}/>
          
               <Route path="/forgetpassword" element={<ForgetPassword/>} />
               <Route path="/check" element={<CheckYourEmail/>} />
               <Route path="/passwordreset" element={<ResetPassword/>} />
               
               <Route path="/all-Users" element={ <PrivateRoute><IndexAdmin/></PrivateRoute>}/>
               
               <Route path="/delivery-list" element={ <PrivateRoute><RequestDelivery/></PrivateRoute>}/>
               
               <Route path="/product-proposition" element={ <PrivateRoute><PropositionOfProducts/></PrivateRoute>}/>
               
           
               <Route path="/friendprofiles" element={ <PrivateRoute><ProfileUsers/></PrivateRoute>}/>
               
               <Route path="/messenger" element={ <PrivateRoute><Messenger/></PrivateRoute>}/>
               <Route path="/profiles" element={ <PrivateRoute><Allprofile/></PrivateRoute>}/>

               
               <Route path="/recommanded-system" element={ <PrivateRoute><Recommandedmain/></PrivateRoute>}/>
               
               <Route path="/pricing" element={ <PrivateRoute><Pricing/></PrivateRoute>}/>

               <Route path="/organisations-list" element={ <PrivateRoute><RequestOrganisation/></PrivateRoute>}/>
                
               <Route path="/myorders-delivery" element={ <PrivateRoute><MyOrders/></PrivateRoute>}/>

               <Route path="/wishlist" element={ <PrivateRoute><Wishlist/></PrivateRoute>}/>
               <Route path="/card" element={<PrivateRoute><MainCard/></PrivateRoute>}/>
               <Route path="/addproduct" element={<PrivateRoute><AddProduct/></PrivateRoute>} />
               <Route path='/profile' element={<PrivateRoute><ProfileMain/></PrivateRoute>}/>
               <Route path='/address' element={<PrivateRoute><Address/></PrivateRoute>} />
               <Route path='/changepassword' element={<PrivateRoute><ChangePossword/></PrivateRoute>}/>
               <Route exact path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
               <Route exact path='/PlaceOrderPremuim' element={<PrivateRoute>  <Elements stripe={promise}><PlaceOrderPremuim/></Elements></PrivateRoute>} />
               
               
               <Route exact path='/product_searched' element={<PrivateRoute><SearchProduct/></PrivateRoute>} />
               
               <Route exact path='/exchange-product' element={<PrivateRoute><MyExchangeProduct/></PrivateRoute>} />

               </Routes>
               

        </Router>
  {/* <Footer/> */}
  </Provider>  
  );
};
export default App;

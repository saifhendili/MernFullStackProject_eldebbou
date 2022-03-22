import React,{useState} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../Layout/Spinner';
import { ChangePassword, PutInfo } from '../../../actions/user';

function ChangePossword({ChangePassword,auth:{user,loading}}) {
    const [fromData, setFormData] = useState({
        oldpassword: '',
        password: '',
      
    });
    const {
        oldpassword,
        password, 
      } = fromData;
      const hundelchange = (e) =>
      setFormData({ ...fromData, [e.target.name]: e.target.value });


      const onsubmit = (e) => {
        e.preventDefault();
        
        ChangePassword({
            oldpassword,
        password, 
          });
        }
     
  return (   loading || user === null ? (
    <Spinner />
  ) :
  

  <div class="app-content">

      <div class="u-s-p-y-60">

          <div class="section__content">
              <div class="container">
                  <div class="breadcrumb">
                      <div class="breadcrumb__wrap">
                          <ul class="breadcrumb__list">
                              <li class="has-separator">

                                  <a href="index.html">Home</a></li>
                              <li class="is-marked">

                                  <a href="dash-edit-profile.html">My Account</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
      <div class="u-s-p-b-60">

          <div class="section__content">
              <div class="dash">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-3 col-md-12">

                              <div class="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                                  <div class="dash__pad-1">

                                      <span class="dash__text u-s-m-b-16">Hello, John Doe</span>
                                      <ul class="dash__f-list">
                                          <li>

                                              <a class="dash-active" href="dashboard.html">Manage My Account</a></li>
                                          <li>

                                              <a href="dash-my-profile.html">My Profile</a></li>
                                          <li>

                                              <a href="dash-address-book.html">Address Book</a></li>
                                          <li>

                                              <a href="dash-track-order.html">Track Order</a></li>
                                          <li>

                                              <a href="dash-my-order.html">My Orders</a></li>
                                          <li>

                                              <a href="dash-payment-option.html">My Payment Options</a></li>
                                          <li>

                                              <a href="dash-cancellation.html">My Returns & Cancellations</a></li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
                                  <div class="dash__pad-1">
                                      <ul class="dash__w-list">
                                          <li>
                                              <div class="dash__w-wrap">

                                                  <span class="dash__w-icon dash__w-icon-style-1"><i class="fas fa-cart-arrow-down"></i></span>

                                                  <span class="dash__w-text">4</span>

                                                  <span class="dash__w-name">Orders Placed</span></div>
                                          </li>
                                          <li>
                                              <div class="dash__w-wrap">

                                                  <span class="dash__w-icon dash__w-icon-style-2"><i class="fas fa-times"></i></span>

                                                  <span class="dash__w-text">0</span>

                                                  <span class="dash__w-name">Cancel Orders</span></div>
                                          </li>
                                          <li>
                                              <div class="dash__w-wrap">

                                                  <span class="dash__w-icon dash__w-icon-style-3"><i class="far fa-heart"></i></span>

                                                  <span class="dash__w-text">0</span>

                                                  <span class="dash__w-name">Wishlist</span></div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-9 col-md-12">
                              <div class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                                  <div class="dash__pad-2">
                                      <h1 class="dash__h1 u-s-m-b-14">Edit Profile</h1>

                                      <span class="dash__text u-s-m-b-30">Looks like you haven't update your profile</span>
                                      <div class="dash__link dash__link--secondary u-s-m-b-30">

                                          <a data-modal="modal" data-modal-id="#dash-newsletter">Subscribe Newsletter</a></div>
                                      <div class="row">
                                          <div class="col-lg-12">
                                              <form class="dash-edit-p" onSubmit={(e) => onsubmit(e)}>
                                                  <div class="gl-inline">
                                                      <div class="u-s-m-b-30">

                                                          <label class="gl-label" for="reg-fname">OLD PASSWORD *</label>

                                                          <input class="input-text input-text--primary-style"name='oldpassword' value={oldpassword}  onChange={(e) => hundelchange(e)} type="password" id="reg-fname" placeholder="Old Password"/></div>
                                                      <div class="u-s-m-b-30">

                                                          <label class="gl-label" for="reg-lname">PASSWORD *</label>

                                                          <input class="input-text input-text--primary-style" type="password" id="reg-lname" name='password' value={password}  onChange={(e) => hundelchange(e)} placeholder="Password"/></div>
                                                  </div>
                                              
                                                  <button class="btn btn--e-brand-b-2" type="submit">Change Password</button>
                                              </form>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>


  )
}
ChangePossword.propTypes = {
    auth: PropTypes.object.isRequired,
    
  };
  const mapStateToProps = (state) => ({
    auth: state.auth,
  });
    
  export default connect(mapStateToProps, {ChangePassword})(ChangePossword);


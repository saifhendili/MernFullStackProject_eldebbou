import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../Layout/Spinner';

function ProfileMain({auth:{user,loading}}) {
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

                                    <a href="dash-my-profile.html">My Account</a></li>
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

                                        <span class="dash__text u-s-m-b-16">Hello,{user.firstname} {user.lastname}</span>
                                        <ul class="dash__f-list">
                                            <li>

                                                <a href="dashboard.html">Manage My Account</a></li>
                                            <li>

                                                <a class="dash-active" href="dash-my-profile.html">My Profile</a></li>
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
                                <div class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                                    <div class="dash__pad-2">
                                        <h1 class="dash__h1 u-s-m-b-14">My Profile</h1>

                                        <span class="dash__text u-s-m-b-30">Look all your info, you could customize your profile.</span>
                                        <div class="row">
                                            <div class="col-lg-4 u-s-m-b-30">
                                                <h2 class="dash__h2 u-s-m-b-8">Full Name</h2>

                                                <span class="dash__text">John Doe</span>
                                            </div>
                                            <div class="col-lg-4 u-s-m-b-30">
                                                <h2 class="dash__h2 u-s-m-b-8">E-mail</h2>

                                                <span class="dash__text">johndoe@domain.com</span>
                                                <div class="dash__link dash__link--secondary">

                                                    <a href="#">Change</a></div>
                                            </div>
                                            <div class="col-lg-4 u-s-m-b-30">
                                                <h2 class="dash__h2 u-s-m-b-8">Phone</h2>
                                                <span class="dash__text">Please enter your mobile</span>
                                                <div class="dash__link dash__link--secondary">

                                                    <a href="#">Add</a></div>
                                            </div>
                                            <div class="col-lg-4 u-s-m-b-30">
                                                <h2 class="dash__h2 u-s-m-b-8">Birthday</h2>

                                                <span class="dash__text">1991-02-02</span>
                                            </div>
                                            <div class="col-lg-4 u-s-m-b-30">
                                                <h2 class="dash__h2 u-s-m-b-8">Gender</h2>

                                                <span class="dash__text">Male</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="dash__link dash__link--secondary u-s-m-b-30">

                                                    <a data-modal="modal" data-modal-id="#dash-newsletter">Subscribe Newsletter</a></div>
                                                <div class="u-s-m-b-16">

                                                    <a class="dash__custom-link btn--e-transparent-brand-b-2" href="dash-edit-profile.html">Edit Profile</a></div>
                                                <div>

                                                    <a class="dash__custom-link btn--e-brand-b-2" href="#">Change Password</a></div>
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
ProfileMain.propTypes = {
    auth: PropTypes.object.isRequired,
    
  };
  const mapStateToProps = (state) => ({
    auth: state.auth,
  });
    
  export default connect(mapStateToProps, {})(ProfileMain);


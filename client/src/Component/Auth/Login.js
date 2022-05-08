import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';
import { login } from '../../actions/auth';
import img from '../../image/formation2.jpg';


import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Login({ login, isAuthenticated }) {
  const [fromData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = fromData;
  const hundelchange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  const onsubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />
  }
  return (

        <div>
      <div class="app-content">

<div class="u-s-p-y-60">

    <div class="section__content">
        <div class="container">
            <div class="breadcrumb">
                <div class="breadcrumb__wrap">
                    <ul class="breadcrumb__list">
                        <li class="has-separator">
<Link to="/">
                         Home   </Link></li>
                         
                        <li class="is-marked">

                            Signin</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="u-s-p-b-60">

    
   
    <div class="section__content">
        <div class="container">
            <div class="row row--center">
                <div class="col-lg-6 col-md-8 u-s-m-b-30">
                    <div class="l-f-o">
                        <div class="l-f-o__pad-box">
                            <h1 class="gl-h1">I'M NEW CUSTOMER</h1>

                            {/* <span class="gl-text u-s-m-b-30">By creating an account with our store, you will be able to move through the checkout process faster, store shipping addresses, view and track your orders in your account and more.</span> */}
                            <div class="u-s-m-b-15">

                                 <Link to='/register' class="l-f-o__create-link btn--e-transparent-brand-b-2" >CREATE AN ACCOUNT</Link></div>
                            <h1 class="gl-h1">SIGNIN</h1>

                            <span class="gl-text u-s-m-b-30">If you have an account with us, please log in.</span>
                            <form class="l-f-o__form"  onSubmit={(e) => onsubmit(e)}>
                                <div class="gl-s-api">
                                    <div class="u-s-m-b-15">

                                        <button class="gl-s-api__btn gl-s-api__btn--fb" type="button"><i class="fab fa-facebook-f"></i>

                                            <span>Signin with Facebook</span></button></div>
                                    <div class="u-s-m-b-15">

                                        <button class="gl-s-api__btn gl-s-api__btn--gplus" type="button"><i class="fab fa-google"></i>

                                            <span>Signin with Google</span></button></div>
                                </div>
                                <div class="u-s-m-b-30">

                                    <label class="gl-label" for="login-email">E-MAIL *</label>

                                    <input class="input-text input-text--primary-style" id="login-email" placeholder="Enter E-mail"
                                      type='email'
                                   
                                      name='email'
                                      value={email}
                                      onChange={(e) => hundelchange(e)}
                                      required
                                      /></div>
                                <div class="u-s-m-b-30">

                                    <label class="gl-label"  type='password'
                                   
                                     for="login-password">PASSWORD *</label>

                                    <input class="input-text input-text--primary-style" type="password" id="login-password" placeholder="Enter Password"
                                     name='password'
                                     value={password}
                                     minLength='6'
                                     required
                                     onChange={(e) => hundelchange(e)}/></div>
                                <div class="gl-inline">
                                    <div class="u-s-m-b-30">

                                        <button class="btn btn--e-transparent-brand-b-2" type="submit">LOGIN</button></div>
                                    <div class="u-s-m-b-30">

                                        <Link class="gl-link" to="/forgetpassword">Lost Your Password?</Link></div>
                                </div>
                        <div class="u-s-m-b-30">

                                    <div class="check-box">

                                        <input type="checkbox" id="remember-me"/>
                                        <div class="check-box__state check-box__state--primary">

                                            <label class="check-box__label" for="remember-me">Remember Me</label></div>
                                    </div>
                                </div>
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
   
  );
}
    Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    };
    const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    });
export default connect(mapStateToProps, { login })(Login);
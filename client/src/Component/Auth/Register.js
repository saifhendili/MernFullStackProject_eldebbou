import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { SetAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import img from '../../image/formation2.jpg';

function Register({ SetAlert, register, isAuthenticated }) {
  const [fromData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    city:'',
    password: '',
    password2: '',
    birthday: '',
    Role: 'Client or Saller',
  });
  const {
    firstname,
    lastname,
    email,
    city,
    password,
    password2,
    birthday,
    Role,
  } = fromData;
  const hundelchange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  const onsubmit = (e) => {
    e.preventDefault();
    if (password !== password2) SetAlert('Password do not match', 'danger');
    else {
      register({
        firstname,
        lastname,
        email,
        city,
        password,
        password2,
        birthday,
        Role,
      });
    }
  };
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }
  return (
    

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

                                        <a href="signup.html">Signup</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="u-s-p-b-60">

                <div class="section__intro u-s-m-b-60">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="section__text-wrap">
                                    <h1 class="section__heading u-c-secondary">CREATE AN ACCOUNT</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
       
                <div class="section__content">
                    <div class="container">
                        <div class="row row--center">
                            <div class="col-lg-6 col-md-8 u-s-m-b-30">
                                <div class="l-f-o">
                                    <div class="l-f-o__pad-box">
                                        <h1 class="gl-h1">PERSONAL INFORMATION</h1>
                                        <form  onSubmit={(e) => onsubmit(e)} class="l-f-o__form">
                                            <div class="gl-s-api">
                                                <div class="u-s-m-b-15">

                                                    <button class="gl-s-api__btn gl-s-api__btn--fb" type="button"><i class="fab fa-facebook-f"></i>

                                                        <span>Signup with Facebook</span></button></div>
                                                <div class="u-s-m-b-30">

                                                    <button class="gl-s-api__btn gl-s-api__btn--gplus" type="button"><i class="fab fa-google"></i>

                                                        <span>Signup with Google</span></button></div>
                                            </div>
                                            <div class="u-s-m-b-30">

                                                <label class="gl-label" for="reg-fname">FIRST NAME *</label>

                                                <input class="input-text input-text--primary-style" type="text" id="reg-fname" placeholder="First Name"
                                                 name='firstname'
                                                 value={firstname}
                                                 onChange={(e) => hundelchange(e)}
                                                 /></div>
                                            <div class="u-s-m-b-30">

                                                <label class="gl-label" for="reg-lname">LAST NAME *</label>

                                                <input class="input-text input-text--primary-style" type="text" id="reg-lname" placeholder="Last Name"
                                                
                                                name='lastname'
                                                value={lastname}
                                                onChange={(e) => hundelchange(e)}
                                                /></div>
                                            <div class="gl-inline">
                                                <div class="u-s-m-b-30">


                                                    <span class="gl-label">BIRTHDAY</span>
                                                    <input
                                                       id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true"
                                                        type='date'
                                                        placeholder='Date of Birth'
                                                        name='birthday'
                                                        value={birthday}
                                                        onChange={(e) => hundelchange(e)}
                                                      />
                                                        
                                                </div>
                                                
                                            </div>
                                            <div class="u-s-m-b-30">

                                                <label class="gl-label" for="reg-email">E-MAIL *</label>

                                                <input class="input-text input-text--primary-style"  id="reg-email" placeholder="Enter E-mail"
                                                  type='email'
                                                  
                                                  name='email'
                                                  value={email}
                                                  onChange={(e) => hundelchange(e)}
                                                  /></div>
                                            <div class="u-s-m-b-30">

                                                <label class="gl-label" for="reg-password">PASSWORD *</label>

                                                <input class="input-text input-text--primary-style" id="reg-password" placeholder="Enter Password" 
                                                 type='password'
                                                
                                                 name='password'
                                                 value={password}
                                                 minLength='6'
                                                 onChange={(e) => hundelchange(e)}
                                                 /></div>
                                               
                                                  <div class="u-s-m-b-30">

                                                    <label class="gl-label" for="reg-password2">REPYT PASSWORD *</label>

                                                    <input class="input-text input-text--primary-style" id="reg-password2" placeholder="Enter Password" 
                                                    type='password'

                                                    name='password2'
                                                    value={password2}
                                                    minLength='6'
                                                    onChange={(e) => hundelchange(e)}
                                                    /></div>
                                                 <div class="u-s-m-b-30">

<label class="gl-label" for="reg-city">City *</label>

<input class="input-text input-text--primary-style" id="reg-city" placeholder="Enter a city" 
 type='text'

 name='city'
 value={city}
 onChange={(e) => hundelchange(e)}
 /></div>
  <div class="u-s-m-b-30">

<label class="gl-label" for="reg-role">Type of User *</label>

<select
class="form-select" 
            name='Role'
            value={Role}
            onChange={(e) => hundelchange(e)}
          >
            
            <option className='option-type-profile'>Client or Saller</option>
            <option className='option-type-profile'>Organisation</option>
            <option className='option-type-profile'>Delivery</option>
          </select>
 </div>
                                            <div class="u-s-m-b-15">

                                                <button class="btn btn--e-transparent-brand-b-2" type="submit">CREATE</button></div>

                                            <a class="gl-link" href="#">Return to Store</a>
                                        </form>
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

Register.propTypes = {
  SetAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { SetAlert, register })(Register);
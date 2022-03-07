import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, Redirect } from 'react-router-dom';
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
    return <Redirect to='/dashboard' />
  }
  return (
    <div className='mybodylog'>
      {/* <img className='imageloginn' src={img} /> */}
      <div className='logbor'>
        <p className='signuplogo'>Sign In</p>
        <div className='create-pro'>
          <FontAwesomeIcon className='faUser' icon={faUser} />
          <p className='paragraphe-create-pro'>Sign Into Your Account</p>
        </div>

        <form className='register-form' onSubmit={(e) => onsubmit(e)}>
          <input
            className='myinput'
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => hundelchange(e)}
            required
          />
          <input
            className='myinput'
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            minLength='6'
            onChange={(e) => hundelchange(e)}
            required
          />

          <input className='submitcreatepro' type='submit' value='Log in' />
        </form>
        <p className='footerhome'>
          Don't have an account?
          <Link to='/register'>
            <span className='spansign'>Sign up</span>{' '}
          </Link>
        </p>
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
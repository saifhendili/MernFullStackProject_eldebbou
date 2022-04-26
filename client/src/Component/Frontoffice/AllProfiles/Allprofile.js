import React, { useEffect, Fragment } from 'react';

import { connect } from 'react-redux';


import User from './User';
import PropTypes from 'prop-types';
import { GetUsers } from '../../../actions/user';
import Spinner from '../../Layout/Spinner';

const Allprofile = ({
    GetUsers,
    user: { users, loading },profile:{search}
}) => {
  useEffect(() => {
    GetUsers();
  }, [GetUsers]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {/* <Navbar /> */}
          <h1 className='searchforpreople'>Search For People</h1>
          <div className='all-profile'>
          {users.map((profile, i) => (
            <User key={profile._id} profile={profile} search={search} />
          ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
Allprofile.propTypes = {
  Allprofile: PropTypes.func.isRequired,
  getProfiles: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
  profile: state.profile,


});
export default connect(mapStateToProps, { GetUsers })(Allprofile);
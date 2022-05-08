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
          <div class="container ml-1 mt-3 mb-4 ">
<div class="col-lg-12 mt-4 mt-lg-0 ">
    <div class="row fixed">
      <div class="col-md-9">
        <div class="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
          <table class="table manage-candidates-top mb-0">
            <thead>
              <tr>
                <th>Candidate Name</th>
        
              </tr>
            </thead>
            <tbody>
          {users.map((profile, i) => (
            <User key={profile._id} profile={profile} search={search} />
          ))}
        </tbody>
          </table>
          <div class="text-center mt-3 mt-sm-3">
            <ul class="pagination justify-content-center mb-0">
              <li class="page-item disabled"> <span class="page-link">Prev</span> </li>
              <li class="page-item active" aria-current="page"><span class="page-link">1 </span> <span class="sr-only">(current)</span></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">...</a></li>
              <li class="page-item"><a class="page-link" href="#">25</a></li>
              <li class="page-item"> <a class="page-link" href="#">Next</a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
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
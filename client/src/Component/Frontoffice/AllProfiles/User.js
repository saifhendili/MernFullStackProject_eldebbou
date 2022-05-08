import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const User = ({
  profile: {
  _id, firstname, lastname, avatar, typeuser 
  },
  search,
}) => {
  return (
    <Fragment>
      {firstname.toLowerCase().includes(search.toLowerCase()) ||
      lastname.toLowerCase().includes(search.toLowerCase()) ? (
        <Link to={`/friendprofiles?id=${_id}`}>
            <tr class="candidates-list">
                <td class="title">
                  <div class="thumb">
                    <img class="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                  </div>
                  <div class="candidate-list-details">
                    <div class="candidate-list-info">
                      <div class="candidate-list-title">
                        <h5 class="mb-0"><a href="#">{firstname} {lastname}</a></h5>
                      </div>
                      <div class="candidate-list-option">
                        <ul class="list-unstyled">
                          <li><i class="fas fa-filter pr-1"></i>{typeuser}</li>
                          <li><i class="fas fa-map-marker-alt pr-1"></i>Rolling Meadows, IL 60008</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="candidate-list-favourite-time text-center">
                  <a class="candidate-list-favourite order-2 text-danger" href="#"><i class="fas fa-heart"></i></a>
                  <span class="candidate-list-time order-1"></span>
                </td>
                <td>
                  <ul class="list-unstyled mb-0 d-flex justify-content-end">
                    <li> <Link to={`/friendprofiles?id=${_id}`} class="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i class="far fa-eye"> </i></Link></li>
                    
                  </ul>
                </td>
              </tr>
          
           
        </Link>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

User.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default User;
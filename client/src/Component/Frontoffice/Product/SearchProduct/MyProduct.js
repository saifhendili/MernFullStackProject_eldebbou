import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MyProduct = ({
    product: {
  _id, name,image
  },
  search,
}) => {
  return (
    <Fragment>
      {name.toLowerCase().includes(search.toLowerCase()) ? (

         
        <Link to={`/friendprofiles?id=${_id}`}>
          <div class='center'>
            <div class='property-card'>
              <div class='property-image'>
                <div>
                  {/* <img class='property-image-reel' src={image} /> */}
                </div>
              </div>

              <div class='property-description'>
                <h5>
                  {' '}
                  {name} 
                </h5>
                {/* <p>
                  {typeuser} at {company}
                </p> */}
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <Fragment>
        </Fragment>
      )}
    </Fragment>
  );
};

// Product.propTypes = {
//     product: PropTypes.object.isRequired,
// };

export default MyProduct;
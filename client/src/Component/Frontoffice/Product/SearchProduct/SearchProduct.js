import React, { useEffect, Fragment } from 'react';

import { connect } from 'react-redux';


import MyProduct from './MyProduct';
import PropTypes from 'prop-types';
import Spinner from '../../../Layout/Spinner';
import { GetProducts } from '../../../../actions/product';

const SearchProduct = ({
    GetProducts,
    product: { products, loading },profile:{searchpro}
}) => {
  useEffect(() => {
    GetProducts();
    console.log(searchpro)
  }, [GetProducts]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {/* <Navbar /> */}
          <h1 className='searchforpreople'>Search For People</h1>
          <div className='all-profile'>
          {products.map((p, i) => (
             <MyProduct key={p._id} product={p} search={searchpro} />
             ))}
           </div>
        </Fragment>
      )}
    </Fragment>
  );
};
SearchProduct.propTypes = {
  GetProducts: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  product: state.product,
  profile: state.profile,


});
export default connect(mapStateToProps, { GetProducts })(SearchProduct);
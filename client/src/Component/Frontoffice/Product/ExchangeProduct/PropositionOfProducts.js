import React,{useEffect,Fragment} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Spinner from '../../../Layout/Spinner';
import { useSearchParams } from 'react-router-dom';
import { getProduct } from '../../../../actions/product';
import PropositionItems from './PropositionItems';


const PropositionOfProducts = ({getProduct,product:{product,loading}}) => {

    const [searchParams] = useSearchParams();


    useEffect(() => {
        getProduct(searchParams.get("id"));
        
      }, []);
   
    useEffect(() => {
      }, []);

  return (
      
<Fragment>
      {loading || product==null? (
        <Spinner />
      ) : (
        <Fragment>

<div class="app-container">

    <div class="app-main" id="main">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 m-b-30">
                <div class="d-block d-sm-flex flex-nowrap align-items-center">
                    <div class="page-title mb-2 mb-sm-0">
                        <h1>Propositions</h1>
                    </div>
                    <div class="ml-auto d-flex align-items-center">
                      
                    </div>
                </div>
            </div>
        </div>
       
        <div class="row">
            <div class="col-12">
                <div class="card card-statistics clients-contant">
                    <div class="card-header">
                        <div class="d-xxs-flex justify-content-between align-items-center">
                            <div class="card-heading">
                                <h4 class="card-title">Propositions</h4>
                            </div>
                           
                        </div>
                    </div>
                    <div class="card-body py-0 table-responsive">
                        <table class="table clients-contant-table mb-0">
                            <thead>
                                <tr>

                                    <th scope="col">Image</th>
                                    <th scope="col">Described</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                              {product.proposition.map((x)=>(<PropositionItems  key={x._id} idproduct={searchParams.get("id")} x={x} />))}
                                   
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
 
    </div>
  
    </div>  </div>  
 </Fragment>
      )}
     </Fragment>
  );
};
PropositionOfProducts.propTypes = {
    getProduct: PropTypes.func.isRequired,

  };
  
  const mapStateToProps = (state) => ({
    product: state.product,
  });
  
  export default connect(mapStateToProps, { getProduct})(PropositionOfProducts);
 
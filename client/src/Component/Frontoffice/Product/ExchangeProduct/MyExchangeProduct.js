import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import { GetProductsExchange } from '../../../../actions/product';
import Spinner from '../../../Layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function MyExchangeProduct({GetProductsExchange,product:{loading,products}}) {
    useEffect(()=>{
        GetProductsExchange()
    },[])
  return (
    loading || products === null ? (
        <Spinner />
      ):
  
            <div className="app-content">
  <div className="u-s-p-y-90">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="shop-p"></div>
           <div className="shop-p__toolbar u-s-m-b-30">
             
              
      <div class="container mt-5">
<div class="row d-flex justify-content-center">
<div class="col-md-7 w-100">
   
</div>
</div>
</div>
     
    

      <div className="shop-p__tool-style">
        <div className="tool-style__group u-s-m-b-8">
        
          <span className="js-shop-list-target is-active">My Product({products.length})</span></div>
        <form>
       
        </form>
      </div>
    </div>
    <div className="shop-p__collection">
    <div className="row is-grid-active">
{products.map(x=>x.status== false ?<div className="col-lg-3 col-md-4 col-sm-6">

        <div className="product-m">
          <div className="product-m__thumb">
            <Link to={`/product-proposition?id=${x._id}`} className="aspect aspect--bg-grey aspect--square u-d-block" >
              <img className="aspect__img" src={`assetes/image/product/${x.image}`} alt /></Link>
            <div className="product-m__quick-look">
              <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
          </div>
          <div className="product-m__content">
            <div className="product-m__category">
              <a href="shop-side-version-2.html">{x.Category}</a></div>
            <div className="product-m__name">
              <a href="product-detail.html">{x.name}</a></div>
            <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" /><i className="far fa-star" />
              <span className="product-m__review">(23)</span></div>
          
            <div className="product-m__hover">
              <div className="product-m__preview-description">
                <span>{x.description} .</span></div>

            </div>
          </div>
        </div>
      </div>:null

)}
    </div>
    </div> 
    </div> 
    </div> 
    </div> 
    </div> 
     </div>  )
}
MyExchangeProduct.propTypes = {
    GetProductsExchange:PropTypes.func.isRequired
  };
const mapStateToProps = (state) => ({
    product: state.product,

});
  export default connect(mapStateToProps, {GetProductsExchange})(MyExchangeProduct);


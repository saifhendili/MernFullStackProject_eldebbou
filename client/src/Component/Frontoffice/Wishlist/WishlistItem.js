import React,{useEffect} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DeleteWishlist } from '../../../actions/wishlist';
import { Link } from 'react-router-dom';

function WishlistItem({DeleteWishlist, product:{_id,name,image,Category,price,product}}) {


  return (
    <div class="w-r u-s-m-b-30">
  
   <div class="w-r__container">
        <div class="w-r__wrap-1">
            <div class="w-r__img-wrap">

                <img class="u-img-fluid" src={`assetes/image/product/${image}`} alt=""/></div>
            <div class="w-r__info">

                <span class="w-r__name">

                    <a href="product-detail.html">{name}</a></span>

                <span class="w-r__category">

                    <a href="shop-side-version-2.html"></a>{Category}</span>

                <span class="w-r__price">{price} DT

                    <span class="w-r__discount"></span></span></div>
        </div>
        <div class="w-r__wrap-2">

            <a class="w-r__link btn--e-brand-b-2" data-modal="modal" data-modal-id="#add-to-cart">ADD TO CART</a>

            <Link to={`/myproduct?id=${product}`} class="w-r__link btn--e-transparent-platinum-b-2" >VIEW</Link>
            <a  onClick={() => DeleteWishlist(_id)}class="w-r__link btn--e-transparent-platinum-b-2" href="#">REMOVE</a></div>
    </div> 
</div>
  )
}
WishlistItem.propTypes = {
    DeleteWishlist: PropTypes.func.isRequired,
  };

const mapStateToProps = (state) => ({

  });
  
  export default connect(mapStateToProps, {
    DeleteWishlist,
  })(WishlistItem);


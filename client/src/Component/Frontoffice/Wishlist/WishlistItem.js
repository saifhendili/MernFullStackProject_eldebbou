import React,{useEffect} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
function WishlistItem({product:{name,image,Category,price}}) {


  return (
    <div class="w-r u-s-m-b-30">
    <div class="w-r__container">
        <div class="w-r__wrap-1">
            <div class="w-r__img-wrap">

                <img class="u-img-fluid" src={image} alt=""/></div>
            <div class="w-r__info">

                <span class="w-r__name">

                    <a href="product-detail.html">{name}</a></span>

                <span class="w-r__category">

                    <a href="shop-side-version-2.html"></a>{Category}</span>

                <span class="w-r__price">{price}

                    <span class="w-r__discount">$160.00</span></span></div>
        </div>
        <div class="w-r__wrap-2">

            <a class="w-r__link btn--e-brand-b-2" data-modal="modal" data-modal-id="#add-to-cart">ADD TO CART</a>

            <a class="w-r__link btn--e-transparent-platinum-b-2" href="product-detail.html">VIEW</a>

            <a class="w-r__link btn--e-transparent-platinum-b-2" href="#">REMOVE</a></div>
    </div>
</div>
  )
}



  
  const mapStateToProps = (state) => ({
  });
  
  export default connect(mapStateToProps, {  })(WishlistItem);

import React ,{Fragment,useEffect}from 'react'
import { GetWishLists } from '../../../actions/wishlist';
import WishlistItem from './WishlistItem'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../Layout/Spinner';
import { Link } from 'react-router-dom';
 

function Wishlist({GetWishLists ,wishlist:{wishlists,loading}}) {
    useEffect(() => {
        GetWishLists();
      }, [GetWishLists]);
      return loading || wishlists === null ? (
        <Spinner />
      ) : (  <Fragment>
    <div class="app-content">

        <div class="u-s-p-y-60">

            <div class="section__content">
                <div class="container">
                    <div class="breadcrumb">
                        <div class="breadcrumb__wrap">
                            <ul class="breadcrumb__list">
                                <li class="has-separator">

                                    <a href="index.html">Home</a></li>
                                <li class="is-marked">

                                    <a href="wishlist.html">Wishlist</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="u-s-p-b-60">

            <div class="section__intro u-s-m-b-60">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section__text-wrap">
                                <h1 class="section__heading u-c-secondary">Wishlist</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
            <div class="section__content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">

                     {loading}
                           {wishlists.map(x=>(<WishlistItem product={x} />
                       
                           ))}
                       
                          
                      
                        </div>
                        <div class="col-lg-12">
                            <div class="route-box">
                                <div class="route-box__g">

                                    <Link to = "/dashboard" class="route-box__link" href="shop-side-version-2.html"><i class="fas fa-long-arrow-alt-left"></i>

                                        <span>CONTINUE SHOPPING</span></Link></div>
                                <div class="route-box__g">

                                    <a class="route-box__link" href="wishlist.html"><i class="fas fa-trash"></i>

                                        <span>CLEAR WISHLIST</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </Fragment>
   );
 };
Wishlist.propTypes = {
    GetWishLists: PropTypes.func.isRequired,
    wishlist: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    wishlist: state.wishlist,
  });
  
  export default connect(mapStateToProps, { GetWishLists })(Wishlist);

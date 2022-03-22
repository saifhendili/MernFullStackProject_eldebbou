import React ,{Fragment,useEffect}from 'react'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardItem from './CardItem'

import { GetPanier } from '../../actions/panier';
import Spinner from '../Layout/Spinner';

function MainCard({GetPanier,panier:{panier,loading} ,auth:{user}}) {

    useEffect(() => {
        GetPanier();
      }, [GetPanier]);
  return     loading || panier === null ? (
        <Spinner />
      ) : panier.length== 0 ?(
         
              <div class="app-content">

<div class="u-s-p-y-60">

    <div class="section__content">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 u-s-m-b-30">
                    <div class="empty">
                        <div class="empty__wrap">

                            <span class="empty__big-text">EMPTY</span>

                            <span class="empty__text-1">No items found on your cart.</span>

                            <a class="empty__redirect-link btn--e-brand" href="shop-side-version-2.html">CONTINUE SHOPPING</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>):
   ( <div class="app-content">

        <div class="u-s-p-y-60">

            <div class="section__content">
                <div class="container">
                    <div class="breadcrumb">
                        <div class="breadcrumb__wrap">
                            <ul class="breadcrumb__list">
                                <li class="has-separator">
                                
                                    <a href="index.html">Home</a></li>
                                <li class="is-marked">

                                    <a href="cart.html">Cart</a></li>
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
                                <h1 class="section__heading u-c-secondary">SHOPPING CART</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section__content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                            <div class="table-responsive">
                                <table class="table-p">
                                    <tbody>
{
    panier.map(x=>   <CardItem product={x}/>)
}
                                 
                                  
                                     
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="route-box">
                                <div class="route-box__g1">

                                    <a class="route-box__link" href="shop-side-version-2.html"><i class="fas fa-long-arrow-alt-left"></i>

                                        <span>CONTINUE SHOPPING</span></a></div>
                                <div class="route-box__g2">

                                    <a class="route-box__link" href="cart.html"><i class="fas fa-trash"></i>

                                        <span>CLEAR CART</span></a>

                                   </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="u-s-p-b-60">

            <div class="section__content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                            <form class="f-cart">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 u-s-m-b-30">
                                       
                                    </div>
                                    <div class="col-lg-4 col-md-6 u-s-m-b-30">
                                    <div class="f-cart__pad-box">
                                            <h1 class="gl-h1">ESTIMATE SHIPPING AND TAXES</h1>

                                            <span class="gl-text u-s-m-b-30">Enter your destination to get a shipping estimate.</span>
                                            <div class="u-s-m-b-30">


                                                <label class="gl-label" for="shipping-country">COUNTRY *</label><select class="select-box select-box--primary-style" id="shipping-country">
                                                    <option selected value="">Choose Country</option>
                                                    <option value="uae">United Arab Emirate (UAE)</option>
                                                    <option value="uk">United Kingdom (UK)</option>
                                                    <option value="us">United States (US)</option>
                                                </select>
                                            </div>
                                            <div class="u-s-m-b-30">


                                                <label class="gl-label" for="shipping-state">STATE/PROVINCE *</label><select class="select-box select-box--primary-style" id="shipping-state">
                                                    <option selected value="">Choose State/Province</option>
                                                    <option value="al">Alabama</option>
                                                    <option value="al">Alaska</option>
                                                    <option value="ny">New York</option>
                                                </select>
                                            </div>
                                            <div class="u-s-m-b-30">

                                                <label class="gl-label" for="shipping-zip">ZIP/POSTAL CODE *</label>

                                                <input class="input-text input-text--primary-style" type="text" id="shipping-zip" placeholder="Zip/Postal Code"/></div>
                                            <div class="u-s-m-b-30">

                                                <a class="f-cart__ship-link btn--e-transparent-brand-b-2" href="cart.html">CALCULATE SHIPPING</a></div>

                                            <span class="gl-text">Note: There are some countries where free shipping is available otherwise our flat rate charges or country delivery charges will be apply.</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 u-s-m-b-30">
                                        <div class="f-cart__pad-box">
                                            <div class="u-s-m-b-30">
                                                <table class="f-cart__table">
                                                    <tbody>
                                                        <tr>
                                                            <td>SHIPPING</td>
                                                            <td>7.00 DT</td>
                                                        </tr>
                                                      
                                                        <tr>
                                                            <td>SUBTOTAL</td>
                                                            <td>{user.Total-7}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>GRAND TOTAL</td>
                                                            <td>{user.Total} DT</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div>

                                                <button class="btn btn--e-brand-b-2" type="submit"> PROCEED TO CHECKOUT</button></div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


   )
  
 };

 MainCard.propTypes = {
    GetPanier: PropTypes.func.isRequired,
    panier: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,

  };
  
  const mapStateToProps = (state) => ({
    panier: state.panier,
    auth:state.auth
  });

export default connect(mapStateToProps, { GetPanier })(MainCard);

import React ,{Fragment,useEffect}from 'react'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardItem from './CardItem'

import { GetPanier } from '../../actions/panier';
import Spinner from '../Layout/Spinner';
import { Link } from 'react-router-dom';

function MainCard({GetPanier,panier:{panier,loading} ,auth:{user}}) {

    useEffect(() => {
        GetPanier();
      }, [GetPanier]);
  return loading || panier === null ? (
        <Spinner />
      ) : panier.length==0 ?(
         <Fragment>
              <div className="app-content">

<div className="u-s-p-y-60">

    <div className="section__content">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 u-s-m-b-30">
                    <div className="empty">
                        <div className="empty__wrap">

                            <span className="empty__big-text">EMPTY</span>

                            <span className="empty__text-1">No items found on your cart.</span>

                            <a className="empty__redirect-link btn--e-brand" href="shop-side-version-2.html">CONTINUE SHOPPING</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div> </Fragment>):<Fragment>
   <div className="app-content">

        <div className="u-s-p-y-60">

            <div className="section__content">
                <div className="container">
                    <div className="breadcrumb">
                        <div className="breadcrumb__wrap">
                            <ul className="breadcrumb__list">
                                <li className="has-separator">
                                
                                    <a href="index.html">Home</a></li>
                                <li className="is-marked">

                                    <a href="cart.html">Cart</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="u-s-p-b-60">

            <div className="section__intro u-s-m-b-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section__text-wrap">
                                <h1 className="section__heading u-c-secondary">SHOPPING CART</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section__content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                            <div className="table-responsive">
                                <table className="table-p">
                                    <tbody>
{
    panier.map(x=>   <CardItem key={x._id} product={x}/>)
}
                                 
                                  
                                     
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="route-box">
                                <div className="route-box__g1">

                                    <a className="route-box__link" href="shop-side-version-2.html"><i className="fas fa-long-arrow-alt-left"></i>

                                        <span>CONTINUE SHOPPING</span></a></div>
                                <div className="route-box__g2">

                                    <a className="route-box__link" href="cart.html"><i className="fas fa-trash"></i>

                                        <span>CLEAR CART</span></a>

                                   </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="u-s-p-b-60">

            <div className="section__content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                            <form className="f-cart">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                       
                                    </div>
                                
                                    <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                        <div className="f-cart__pad-box">
                                            <div className="u-s-m-b-30">
                                                <table className="f-cart__table">
                                                    <tbody>
                                                        <tr>
                                                            <td>SHIPPING</td>
                                                            <td>7.00 DT</td>
                                                        </tr>
                                                      
                                                        <tr>
                                                            <td>SUBTOTAL</td>
                                                            <td>{user.Total}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>GRAND TOTAL</td>
                                                            <td>{user.Total} DT</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div>

                                              <Link to="/address">  <button className="btn btn--e-brand-b-2" type="submit"> PROCEED TO CHECKOUT</button></Link></div>
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
   </Fragment>
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

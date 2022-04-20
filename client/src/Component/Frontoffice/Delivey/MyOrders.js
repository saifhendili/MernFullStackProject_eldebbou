import React,{Fragment,useEffect} from 'react'
import { connect } from 'react-redux';
import { MyOrdersDelivery } from '../../../actions/order';
import Spinner from '../../Layout/Spinner';
import PropTypes from 'prop-types';
import OrderDileveryItems from './OrderDileveryItems';

function MyOrders({MyOrdersDelivery,order:{orders,loading}}) {
    useEffect(()=>{
        MyOrdersDelivery()

    },[])
  return (<Fragment>
  {loading ||orders==null? (
    <Spinner />
  ) : (
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

                                <a href="dash-my-order.html">My Account</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="u-s-p-b-60">

        <div class="section__content">
            <div class="dash">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-12">
                            <div class="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                                <div class="dash__pad-1">

                                    <span class="dash__text u-s-m-b-16">Hello, John Doe</span>
                                    <ul class="dash__f-list">
                                        <li>

                                            <a href="dashboard.html">Manage My Account</a></li>
                                        <li>

                                            <a href="dash-my-profile.html">My Profile</a></li>
                                        <li>

                                            <a href="dash-address-book.html">Address Book</a></li>
                                        <li>

                                            <a href="dash-track-order.html">Track Order</a></li>
                                        <li>

                                            <a class="dash-active" href="dash-my-order.html">My Orders</a></li>
                                        <li>

                                            <a href="dash-payment-option.html">My Payment Options</a></li>
                                        <li>

                                            <a href="dash-cancellation.html">My Returns & Cancellations</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
                                
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-12">
                            <div class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                                <div class="dash__pad-2">
                                    <h1 class="dash__h1 u-s-m-b-14">Orders</h1>

                                    <span class="dash__text u-s-m-b-30">Here you can see all products that don't have a delivery.</span>
                                   
                                    <div class="m-order__list">
                                      
                                    {orders.map(x=><OrderDileveryItems key={x._id} order={x} />)}
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>)

  } </Fragment>)
}


MyOrders.propTypes = {
 
    MyOrdersDelivery: PropTypes.func.isRequired,
   
  };
  
  const mapStateToProps = (state) => ({
   order:state.order
  
  });
  
  export default connect(mapStateToProps, {MyOrdersDelivery})(MyOrders);
  
  
  
  

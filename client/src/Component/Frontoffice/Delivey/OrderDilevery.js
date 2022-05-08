import React,{Fragment,useEffect} from 'react'
import { connect } from 'react-redux';
import { getOrdersFree } from '../../../actions/order';
import Spinner from '../../Layout/Spinner';
import PropTypes from 'prop-types';
import order from '../../../reducers/order';
import OrderItem from './OrderItem';

function OrderDilevery({getOrdersFree,order:{orders,loading}}) {
    useEffect(()=>{
        getOrdersFree()

    },[getOrdersFree])
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
                        <div class="col-lg-12 col-md-12">
                            <div class="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                          
                            </div>
                            <div class="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
                                
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                            <div class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                                <div class="dash__pad-2">
                                    <h1 class="dash__h1 u-s-m-b-14">Orders</h1>

                                    <span class="dash__text u-s-m-b-30">Here you can see all products that don't have a delivery.</span>
                                   
                                    <div class="m-order__list">
                                      
                                    {orders.map(x=><OrderItem key={x._id} order={x} />)}
                                     
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


OrderDilevery.propTypes = {
 
     getOrdersFree: PropTypes.func.isRequired,
   
  };
  
  const mapStateToProps = (state) => ({
   order:state.order
  
  });
  
  export default connect(mapStateToProps, {getOrdersFree})(OrderDilevery);
  
  
  
  

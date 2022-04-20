import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReserveOrder } from '../../../actions/order'

function OrderItem({ReserveOrder,order:{address,state,_id,products,price}}) {
    const navigate = useNavigate();

    function submited(){      

        ReserveOrder(_id)
        window.location.reload();
     }
  return (
    <div class="m-order__get">
    <div class="manage-o__header u-s-m-b-30">
        <div class="dash-l-r">
            <div>
                <div class="manage-o__text-2 u-c-secondary">Order #{_id}</div>
                <div class="manage-o__text u-c-silver">Placed on 26 Oct 2016 09:08:37</div>
            </div>
            <div>
                <div class="dash__link dash__link--brand">

                    <a href="dash-manage-order.html">MANAGE</a></div>
            </div>
            <div>
                <div class="dash__link dash__link--brand">

                    <a href="dash-manage-order.html"></a></div>
            </div>
        </div>
    </div>
    <div class="manage-o__description">
    {products.map(x=>
          <div class="description__container">
         
          <div class="description__img-wrap">

              <img class="u-img-fluid" src={`assetes/image/product/${x.image}`}alt=""/></div>
          <div class="description-title"> {x.name}</div>
      </div>
        )}
      
        <div class="description__info-wrap">
            <div onClick={() => submited()} ><span class="badge--processing">{state}</span>
           </div>
         {address? <Fragment><div>

                <span class="manage-o__text-2 u-c-silver">Address:

                    <span class="manage-o__text-2 u-c-secondary">{address.city},{address.state},{address.Street}</span></span></div>
                    <div>

<span class="manage-o__text-2 u-c-silver">Phone:

    <span class="manage-o__text-2 u-c-secondary">{address.phone}</span></span></div></Fragment>:null}  
            <div>

                <span class="manage-o__text-2 u-c-silver">Total:

                    <span class="manage-o__text-2 u-c-secondary">{price}DT</span></span></div>
        </div>
        <div class="description__info-wrap">
           
        </div>
        </div>
</div>
  )
}
  
const mapStateToProps = (state) => ({
    
   });
   
   export default connect(mapStateToProps, {ReserveOrder})(OrderItem);
   
   
 
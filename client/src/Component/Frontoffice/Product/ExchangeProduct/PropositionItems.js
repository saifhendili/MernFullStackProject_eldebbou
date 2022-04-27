import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AddOrderExchange } from '../../../../actions/order';
import { useNavigate } from 'react-router-dom';


const PropositionItems = ({ idproduct,AddOrderExchange, x: {firstname,lastname,description,price,image,_id } }) => {
  const navigate = useNavigate(); 

  const onsubmit = (e) => {
    AddOrderExchange(idproduct,_id)
    navigate("/exchange-product");

  }
  return (
    <tr>
<td>
    <div class="d-flex align-items-center">
        <div class="bg-img mr-4">
            <img src={`assetes/image/proposition/${image}`} class="img-fluid" alt="Clients-01"/>
        </div>
        <p class="font-weight-bold">{firstname} {lastname}</p>
    </div>
</td>

<td><a href="javascript:void(0)" class="dot"></a><span>{description}</span></td>
<td><a href="javascript:void(0)" class="dot"></a><span>{price}</span></td>

<td>
  {/* {!blocked?   <div   onClick={() => BlockUser(_id)} class="btn btn-danger">Block</div>
:   <div   onClick={() => UnBlockUser (_id)} class="btn btn-primary">Unblock</div>


  } */}
 <div    onClick={() => onsubmit()}  class="btn btn-danger">Accept</div>

</td>

</tr>
  )
}
PropositionItems.propTypes = {
  
  };

const mapStateToProps = (state) => ({
  });
  
  export default connect(mapStateToProps, {
    AddOrderExchange
  })(PropositionItems);


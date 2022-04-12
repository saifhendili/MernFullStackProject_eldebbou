import React from 'react'
import { deletePost } from '../../../actions/user'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BlockUser, UnBlockUser } from '../../../actions/request';


const UserItem = ({  BlockUser, UnBlockUser ,deletePost, x: { _id,firstname ,lastname,email ,Role,typeuser,blocked} }) => {


  return (
    <tr>
<td>
    <div class="d-flex align-items-center">
        <div class="bg-img mr-4">
            <img src="assets/img/avtar/01.jpg" class="img-fluid" alt="Clients-01"/>
        </div>
        <p class="font-weight-bold">{firstname} {lastname}</p>
    </div>
</td>
<td>{email}</td>
<td>{Role}</td>
<td><a href="javascript:void(0)" class="dot"></a><span>{typeuser}</span></td>
<td>
  {!blocked?   <div   onClick={() => BlockUser(_id)} class="btn btn-danger">Block</div>
:   <div   onClick={() => UnBlockUser (_id)} class="btn btn-primary">Unblock</div>


  }

</td>
<td>
   <div onClick={() => deletePost(_id)}  class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></div>

</td>
</tr>
  )
}
UserItem.propTypes = {
    deletePost: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
  
  };

const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  export default connect(mapStateToProps, {
    deletePost, BlockUser, UnBlockUser 
  })(UserItem);


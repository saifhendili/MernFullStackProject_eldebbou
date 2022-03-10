import React from 'react'
import { deletePost } from '../../../actions/user'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const UserItem = ({ deletePost, x: { _id,firstname ,lastname,email ,Role,typeuser} }) => {


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
   <div  class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0 "><i class="ti ti-pencil"></i></div>
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
    deletePost,
  })(UserItem);


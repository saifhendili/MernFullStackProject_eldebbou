import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  AcceptRequestDelivery } from '../../../actions/request';


const UserItem = ({ AcceptRequestDelivery, x: { _id,firstname ,lastname,email ,Matricule,status,file,typeuser} }) => {
 
  return (
    <tr>
<td>
    <div class="d-flex align-items-center">
        <div class="bg-img mr-4">
            <img src="assets/img/avtar/01.jpg" class="img-fluid" alt="Clients-01"/>
        </div>
        <p class="font-weight-bold">{firstname} {lastname} ({Matricule})</p>
    </div>
</td>
<td>{email}</td>
{status? 
    <td>True</td>:
<td>False</td>


}
<td> <a href={`assetes/filesrequest/${file}`}download ><img src="assetes/PDF_file_icon.svg" width="50px" height="50px" /></a><span></span></td>
<td>
   <div onClick={() => AcceptRequestDelivery(_id)}  class="btn btn-success ">Accept</div>
</td>
<td>
   <div  class="btn btn-danger ">Blocked</div>
</td>
</tr>
  )
}
UserItem.propTypes = {
    // deletePost: PropTypes.object.isRequired,
    //auth: PropTypes.object.isRequired,
  
  };

const mapStateToProps = (state) => ({
  });
  
export default connect(mapStateToProps, {
    AcceptRequestDelivery
    
  })(UserItem);


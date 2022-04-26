import React,{useState} from 'react'
import { deletePost } from '../../../actions/user'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AddRep } from '../../../actions/request';


const QuestionItem = ({AddRep,  x: { _id,text,email} }) => {
    const [rep,setRep]=useState("")

  return (
   
    <tr>
        
              
<td>
    <div class="d-flex align-items-center">
        <div class="bg-img mr-4">
            <img src="assets/img/avtar/01.jpg" class="img-fluid" alt="Clients-01"/>
        </div>
        <p class="font-weight-bold">{text}</p>
    </div>
</td>
<td>
<input className="input-text input-text--primary-style" type="text" id="reg-fname" name='rep' value={rep} onChange={(e) => setRep(e.target.value)} placeholder="Reponse" />

</td>

<td>
    {/* <input type="submit" value="add" class="btn btn-success"/> */}
    <div onClick={() =>{AddRep(_id,  rep );setRep("")}}  class="btn btn-success">Add</div>
  
</td>
</tr>

  )
}

const mapStateToProps = (state) => ({

  });
  
  export default connect(mapStateToProps, {
    AddRep
  })(QuestionItem);


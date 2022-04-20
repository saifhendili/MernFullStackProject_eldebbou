import React,{Fragment,useEffect,useState} from 'react'
import { AddProposition } from '../../../../actions/proposition'
import { connect } from 'react-redux'

function FormItemProposition({AddProposition,id}) {
    
    const [price,setPrice]=useState("")
    const [imageprop,setimageprop]=useState("")
    const [description,setdescription]=useState("")
    const onChangeFile=e=>{
        setimageprop(e.target.files[0]);
    }
  
  return (
    <form class="pd-tab__rev-f2"   onSubmit={(e) => {  e.preventDefault();
     
        const formData=new FormData();
        formData.append("imageprop",imageprop)
        formData.append("description",description)
        formData.append("price",price)
   
        setPrice("")
        setimageprop("")
        setdescription("")
        
        AddProposition(id,formData)}} enctype="multipart/form-data">
                                            
                                               <div class="rev-f2__group">
                                                   <div class="u-s-m-b-15">
   
                                                       <label class="gl-label" for="reviewer-text">YOUR PROPOSITION *</label><textarea class="text-area text-area--primary-style" id="reviewer-text" name='description' value={description} onChange={(e) => setdescription(e.target.value)}></textarea></div>
                                                   <div>
                                                   <p class="u-s-m-b-30">
   
   <label class="gl-label" for="price">PRICE *</label>
   
   <input class="input-text input-text--primary-style" type="number" name='price'value={price} onChange={(e) => setPrice(e.target.value)} id="reviewer-email"/></p>
                                                       <p class="u-s-m-b-30">
                                                       <div className="custom-file">
                                                                           <input type="file"className="custom-file-input"id="customFile"  onChange={(e) =>onChangeFile(e)} name="imageprop"/>
   
                                                                           <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                                                       </div>
                                                          </p>
                                                      
                                                   </div>
                                               </div>
                                               <div>
   
                                                   <button class="btn btn--e-brand-shadow" type="submit">SUBMIT</button></div>
                                           </form>  )
}
const mapStateToProps = (state) => ({
  
  });
    
  export default connect(mapStateToProps, { AddProposition})(FormItemProposition);


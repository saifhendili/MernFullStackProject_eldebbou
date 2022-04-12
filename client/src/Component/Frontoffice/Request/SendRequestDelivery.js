import React ,{useState}from 'react'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { RequestDelivery } from '../../../actions/auth';


function SendRequestDelivery({RequestDelivery}) {
    const [Matricule,setName]=useState("")
    const [file,setimages]=useState("")

    const onChangeFile=e=>{
        setimages(e.target.files[0]);
    }
    
      const onsubmit = (e) => {
        e.preventDefault();
        const formData=new FormData();
        formData.append("Matricule",Matricule);
        formData.append("file",file)

        setName("")
        setimages("")
        RequestDelivery(formData)
        // window.location.reload()
    }


    return (
        <div>
            <div className="app-content">
                <div>
                    <div className="u-s-p-y-60">
                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="breadcrumb">
                                    <div className="breadcrumb__wrap">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== Section 2 ======*/}
                    <div className="u-s-p-b-60">
                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="dash">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-12">
                                            {/*====== Dashboard Features ======*/}
                                       
                                            {/*====== End - Dashboard Features ======*/}
                                        </div>
                                        <div className="col-lg-9 col-md-12">
                                            <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                                                <div className="dash__pad-2">
                                                    <h1 className="dash__h1 u-s-m-b-14">Request Organisation</h1>
                                                    <div className="dash__link dash__link--secondary u-s-m-b-30">
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <form className="dash-edit-p"  onSubmit={(e) => onsubmit(e)} enctype="multipart/form-data" >
                                                                <div className="gl-inline">
                                                                    <div className="u-s-m-b-30">
                                                                        <label className="gl-label" htmlFor="reg-fname">NAME *</label>
                                                                        <input className="input-text input-text--primary-style" type="text" id="reg-fname" name='Matricule'value={Matricule} onChange={(e) => setName(e.target.value)} placeholder="Matricule" /></div>
                                                                </div>



                                                                <div className="gl-inline">
                                                                   

                                                                </div>
                                                                <div className="gl-inline">
                                                                    <div className="custom-file">
                                                                        <input type="file"className="custom-file-input"id="customFile"  onChange={(e) =>onChangeFile(e)} name="file"/>

                                                                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                                                    </div>






                                                                </div>
                                                                <div className="gl-inline">


                                                                    <div className="u-s-m-b-30">

                                                                    </div>

                                                                </div>

                                                                <div className="gl-inline">



                                                                    <input type="submit" class="dash__custom-link btn--e-transparent-brand-b-2 mt-3"value="Submit Request" /></div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 2 ======*/}

                </div>








            </div></div>
    )
}

SendRequestDelivery.propTypes = {
   
  };
  const mapStateToProps = (state) => ({
  });
  
  export default connect(mapStateToProps, { RequestDelivery })(SendRequestDelivery);

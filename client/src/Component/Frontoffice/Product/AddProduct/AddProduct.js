import React ,{useState}from 'react'
import Footer from '../../../Layout/Footer'
import { Link } from 'react-router-dom';
import { addProduct } from '../../../../actions/product';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';


function AddProduct({addProduct}) {
    const [name,setName]=useState("")
    const [Category,setCategory]=useState("")
    const [price,setPrice]=useState("")
    const [images,setimages]=useState("")
    const [description,setdescription]=useState("")
    const [availibility,setavailibility]=useState(true)
    const [dealType,setdealType]=useState("UsedProduct")

    const onChangeFile=e=>{
        setimages(e.target.files[0]);
    }
    const hundelchange = (e) =>
   {
    setdealType(e.target.value)
       setPrice(0)
   }
      const onsubmit = (e) => {
        e.preventDefault();
     
        const formData=new FormData();
        formData.append("name",name);
        formData.append("description",description)
        formData.append("availibility",availibility)
        formData.append("images",images)
        formData.append("price",price)
        formData.append("dealType",dealType)
        formData.append("Category",Category)
        setName("")
        setCategory("")
        setPrice("")
        setimages("")
        setdescription("")
        setdealType("UsedProduct")
        
        addProduct(formData)
       
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
                                        <ul className="breadcrumb__list">
                                            <li className="has-separator">

                                                <Link to="/dashboard">Home </Link></li>
                                            <li className="is-marked">
                                                <a href="#">Add Product</a></li>
                                        </ul>
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
                                            <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                                                <div className="dash__pad-1">
                                                    <span className="dash__text u-s-m-b-16">Hello, John Doe</span>
                                                    <ul className="dash__f-list">
                                                        <li>
                                                            <a className="dash-active" href="dashboard.html">My Products</a></li>
                                                        <li>
                                                            <a href="dash-my-profile.html">Historique </a></li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
                                                <div className="dash__pad-1">
                                                    <ul className="dash__w-list">
                                                        <li>
                                                            <div className="dash__w-wrap">
                                                                <span className="dash__w-icon dash__w-icon-style-1"><i className="fas fa-cart-arrow-down" /></span>
                                                                <span className="dash__w-text">4</span>
                                                                <span className="dash__w-name">Orders Placed</span></div>
                                                        </li>
                                                        <li>
                                                            <div className="dash__w-wrap">
                                                                <span className="dash__w-icon dash__w-icon-style-2"><i className="fas fa-times" /></span>
                                                                <span className="dash__w-text">0</span>
                                                                <span className="dash__w-name">Cancel Orders</span></div>
                                                        </li>
                                                        <li>
                                                            <div className="dash__w-wrap">
                                                                <span className="dash__w-icon dash__w-icon-style-3"><i className="far fa-heart" /></span>
                                                                <span className="dash__w-text">0</span>
                                                                <span className="dash__w-name">Wishlist</span></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/*====== End - Dashboard Features ======*/}
                                        </div>
                                        <div className="col-lg-9 col-md-12">
                                            <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                                                <div className="dash__pad-2">
                                                    <h1 className="dash__h1 u-s-m-b-14">Add Product</h1>
                                                    <div className="dash__link dash__link--secondary u-s-m-b-30">
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <form className="dash-edit-p"  onSubmit={(e) => onsubmit(e)} enctype="multipart/form-data" >
                                                                <div className="gl-inline">
                                                                    <div className="u-s-m-b-30">
                                                                        <label className="gl-label" htmlFor="reg-fname">NAME *</label>
                                                                        <input className="input-text input-text--primary-style" type="text" id="reg-fname" name='name'value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" /></div>





                                                                    <div className="u-s-m-b-30">

                                                                        <label className="gl-label" htmlFor="reg-fname">Category *</label>
                                                                        <input className="input-text input-text--primary-style" type="text" id="reg-fname" name='Category'value={Category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" /></div>

                                                                </div>
                                                                <div className="u-s-m-b-30">
                                                                        <label className="gl-label"  htmlFor="gender">DealType</label>
                                                                        <select className="select-box select-box--primary-style u-w-100" name='dealType'value={dealType} onChange={(e) =>hundelchange(e)}  id="gender">
                                                                            <option value="UsedProduct">UsedProduct</option>
                                                                            <option value="Exchange">Exchange</option>
                                                                            <option value="Donation">Donation</option>

                                                                        </select></div>



                                                                <div className="gl-inline">
                                                                    {dealType=="UsedProduct"? <div className="u-s-m-b-30">
                                                                        <label className="gl-label" htmlFor="reg-fname">Price *</label>
                                                                        <input className="input-text input-text--primary-style" type="number" id="reg-fname" name='price'value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Put your price" />
                                                                    </div>:   null}
                                                                
                                                                  

                                                                </div>
                                                                <div className="gl-inline">
                                                                    <div className="custom-file">
                                                                        <input type="file"className="custom-file-input"id="customFile"  onChange={(e) =>onChangeFile(e)} name="images"/>

                                                                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                                                    </div>






                                                                </div>
                                                                <div className="gl-inline">


                                                                    <div className="u-s-m-b-30">


                                                                        <div className="u-s-m-b-30">
                                                                            <label className="gl-label" htmlFor="reg-lname" >Description *</label>
                                                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"name='description' value={description} onChange={(e) => setdescription(e.target.value)}></textarea></div>

                                                                    </div>

                                                                </div>

                                                                <div className="gl-inline">



                                                                    <input type="submit" class="dash__custom-link btn--e-transparent-brand-b-2 mt-3"value="Add Product" /></div>
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





                <Footer />




            </div></div>
    )
}

AddProduct.propTypes = {
   
  };
  const mapStateToProps = (state) => ({
  });
  
  export default connect(mapStateToProps, { addProduct })(AddProduct);

import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../Layout/Spinner';
import { GetprofileById } from '../../../actions/profile';
import { useSearchParams } from 'react-router-dom';
import Axios from 'axios';
import { Conversation } from '../../../actions/user';
import { useNavigate } from "react-router-dom";


function ProfileUsers({Conversation,GetprofileById,profile:{user,loading},auth}) {
  const [searchParams] = useSearchParams();
  const [senderId,setsenderId]=useState(auth.user._id)
  const [receiverId,setreceiverId]=useState(searchParams.get("id"))
const navigate =useNavigate()
     
 const add=(e)=>{
  e.preventDefault();
  // console.log(auth.user._id+"ddd")
  // setsenderId(auth.user._id)
  // setreceiverId(searchParams.get("id"))
  const formData=new FormData();

  formData.append("senderId",senderId);
  formData.append("receiverId",receiverId)

  Conversation({senderId,receiverId})
  navigate("/messenger");

 }

    useEffect(()=>{
      
        GetprofileById(searchParams.get("id"));    
    },[])
    return (  loading || user === null ? (
        <Spinner />
      ):
        
  <div className="app-content">
  <div className="u-s-p-y-90">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="shop-p">
            <div className="shop-p__toolbar u-s-m-b-30">
             
              
              <div class="container mt-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-7 w-100">
            <div class="card p-3 py-4">
                <div class="text-center"> <img src={user.avatar} width={100} className="rounded-circle" />
 </div>
                <div class="text-center mt-3">
                  
                   <span class="bg-secondary p-1 px-4 rounded text-white">User</span>
                   <span> </span>
                    <h5 class="mt-2 mb-0">{user.firstname} {user.lastname}</h5>
                    <div class="px-4 mt-1">
                        <p class="fonts">Bio: Consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consequat. </p>
                    </div>
                    <ul class="social-list">
                        <li><i className="fa fa-facebook"></i></li>
        
                    </ul>
                    <div class="buttons"> <button class="btn btn-outline-warning px-4">Follow</button>
                    
                    
                     <button onClick={(e) => add(e)} class="btn btn-secondary px-4 ms-3">Contact</button>
                     
                     
                      </div>
                </div>
            </div>
        </div>
    </div>
</div>
             
            

              <div className="shop-p__tool-style">
                {/* <div className="tool-style__group u-s-m-b-8">
                
                  <span className="js-shop-list-target is-active">My Product({products.length})</span></div> */}
                <form>
               
                </form>
              </div>
            </div>
            {/* <div className="shop-p__collection">
              <div className="row is-grid-active">
 {products.map(x=>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="product-m">
                    <div className="product-m__thumb">
                      <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                        <img className="aspect__img" src={`assetes/image/product/${x.image}`} alt /></a>
                      <div className="product-m__quick-look">
                        <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
                      <div className="product-m__add-cart">
                        <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
                    </div>
                    <div className="product-m__content">
                      <div className="product-m__category">
                        <a href="shop-side-version-2.html">{x.Category}</a></div>
                      <div className="product-m__name">
                        <a href="product-detail.html">{x.name}</a></div>
                      <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" /><i className="far fa-star" />
                        <span className="product-m__review">(23)</span></div>
                      <div className="product-m__price">{x.price}
                      </div>
                      <div className="product-m__hover">
                        <div className="product-m__preview-description">
                          <span>{x.description} .</span></div>
                        <div className="product-m__wishlist">
                          <a className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" /></div>
                      </div>
                    </div>
                  </div>
                </div>

)}
              </div>
            </div> */}
            <div className="u-s-p-y-60">
              <ul className="shop-p__pagination">
                <li className="is-active">
                  <a href="shop-grid-full.html">1</a></li>
                <li>
                  <a href="shop-grid-full.html">2</a></li>
                <li>
                  <a href="shop-grid-full.html">3</a></li>
                <li>
                  <a href="shop-grid-full.html">4</a></li>
                <li>
                  <a className="fas fa-angle-right" href="shop-grid-full.html" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        
    );
}

ProfileUsers.propTypes = {
    profile: PropTypes.object.isRequired,
    GetprofileById:PropTypes.func.isRequired
  };
  const mapStateToProps = (state) => ({
    profile:state.profile,
    auth: state.auth,

  });
  export default connect(mapStateToProps, {GetprofileById,Conversation})(ProfileUsers);

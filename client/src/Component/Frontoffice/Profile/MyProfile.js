import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../Layout/Spinner';
import { GetMyProducts } from '../../../actions/profile';

function MyProfile({GetMyProducts,auth:{user,loading},profile:{products}}) {
    useEffect(()=>{
        GetMyProducts();    
    },[])
    return (  loading || user === null ? (
        <Spinner />
      ):
        
  <div className="app-content">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
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
            <div class="text-center">
            <img width={100} src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Auburn&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Squint&eyebrowType=Angry&mouthType=Disbelief&skinColor=Light'/>
            </div>
                <div class="text-center mt-3">
                  
                   <span class="bg-secondary p-1 px-4 rounded text-white">User</span>
                   <span> </span>
                    <h5 class="mt-2 mb-0">{user.firstname} {user.lastname}</h5>
                    <div class="px-4 mt-1">
                        <p class="fonts">Your Feeling : {user.feeling}<br></br>Based in :{user.city} 27444423&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For Business: {user.email}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br> <ul class="social-links list-inline">
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a></li>
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Skype"><i class="fa fa-skype"></i></a></li>
                        </ul> </p>
                    </div>
                    <ul class="social-list">
                        
        
                    </ul>
                    <div class="buttons"> <button class="btn btn-outline-warning px-4">Follow</button> <button class="btn btn-secondary px-4 ms-3">Contact</button> </div>
                </div>
            </div>
        </div>
    </div>
</div>
             
            

              <div className="shop-p__tool-style">
                <div className="tool-style__group u-s-m-b-8">
                
                  <span className="js-shop-list-target is-active">My Product({products.length})</span></div>
                <form>
               
                </form>
              </div>
            </div>
            <div className="shop-p__collection">
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
            </div>
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

MyProfile.propTypes = {
    auth: PropTypes.object.isRequired,
    GetMyProducts:PropTypes.func.isRequired
  };
  const mapStateToProps = (state) => ({
    auth: state.auth,
    profile:state.profile
  });
  export default connect(mapStateToProps, {GetMyProducts})(MyProfile);
  

import React,{Fragment,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import {getProduct} from '../../../../actions/product'
import Spinner from '../../../Layout/Spinner';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { addComment, getComment } from '../../../../actions/comment';
import CommentItem from './CommentItem';

function DetailProduit({getProduct,addComment,getComment ,comment:{comments},product:{product,loading},location}) {
    const [text, setText] = useState('');
    const { id } = queryString.parse(location.search);
    useEffect(() => {
        getProduct(id);
        getComment(id)
      }, [getProduct, id]);
    return loading || product === null ? (
        <Spinner />
      ) : (
        <Fragment>
    <div class="app-content">

    <div class="u-s-p-t-90">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">

                    <div class="pd-breadcrumb u-s-m-b-30">
                        <ul class="pd-breadcrumb__list">
                            <li class="has-separator">

                                <a href="index.hml">Home</a></li>
                            <li class="has-separator">

                                <a href="shop-side-version-2.html">Electronics</a></li>
                            <li class="has-separator">

                                <a href="shop-side-version-2.html">DSLR Cameras</a></li>
                            <li class="is-marked">

                                <a href="shop-side-version-2.html">Nikon Cameras</a></li>
                        </ul>
                    </div>
           
                    <div class="pd u-s-m-b-30">
                    <img  src={product.image} alt="img" className="u-img-fluid"/>
                     
                    </div>
                </div>
                <div class="col-lg-7">

                    <div class="pd-detail">
                        <div>

                            <span class="pd-detail__name">{product.name}</span></div>
                        <div>
                            <div class="pd-detail__inline">

                                <span class="pd-detail__price">{product.price} DT</span>

                               </div>
                        </div>
                        <div class="u-s-m-b-15">
                            <div class="pd-detail__rating gl-rating-style"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>

                                <span class="pd-detail__review u-s-m-l-4">

                                    <a data-click-scroll="#view-review">23 Reviews</a></span></div>
                        </div>
                        <div class="u-s-m-b-15">
                            
                        </div>
                        <div class="u-s-m-b-15">

                            <span class="pd-detail__preview-desc">{product.description}</span></div>
                        <div class="u-s-m-b-15">
                            <div class="pd-detail__inline">

                                <span class="pd-detail__click-wrap"><i class="far fa-heart u-s-m-r-6"></i>

                                    <a href="signin.html">Add to Wishlist</a>

                                    <span class="pd-detail__click-count">(222)</span></span></div>
                        </div>
                        <div class="u-s-m-b-15">
                      
                        </div>
                        <div class="u-s-m-b-15">
                            <ul class="pd-social-list">
                                <li>

                                    <a class="s-fb--color-hover" href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li>

                                    <a class="s-tw--color-hover" href="#"><i class="fab fa-twitter"></i></a></li>
                                <li>

                                    <a class="s-insta--color-hover" href="#"><i class="fab fa-instagram"></i></a></li>
                                <li>

                                    <a class="s-wa--color-hover" href="#"><i class="fab fa-whatsapp"></i></a></li>
                                <li>

                                    <a class="s-gplus--color-hover" href="#"><i class="fab fa-google-plus-g"></i></a></li>
                            </ul>
                        </div>
                        <div class="u-s-m-b-15">
                            <form class="pd-detail__form">
                                <div class="pd-detail-inline-2">
                                    <div class="u-s-m-b-15">

                                      
                                    </div>
                                    <div class="u-s-m-b-15">

                                        <button class="btn btn--e-brand-b-2" type="submit">Add to Cart</button></div>
                                </div>
                            </form>
                        </div>
                        <div class="u-s-m-b-15">

                            <span class="pd-detail__label u-s-m-b-8">Product Policy:</span>
                            <ul class="pd-detail__policy-list">
                                <li><i class="fas fa-check-circle u-s-m-r-8"></i>

                                    <span>Buyer Protection.</span></li>
                                <li><i class="fas fa-check-circle u-s-m-r-8"></i>

                                    <span>Full Refund if you don't receive your order.</span></li>
                                <li><i class="fas fa-check-circle u-s-m-r-8"></i>

                                    <span>Returns accepted if product not as described.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="u-s-p-y-90">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="pd-tab">
                        <div class="u-s-m-b-30">
                            <ul class="nav pd-tab__list">
                            <li class="nav-item">

<a class="nav-link active" id="view-review" data-toggle="tab" href="#pd-rev">REVIEWS

  </a></li>
                                <li class="nav-item">

                                    <a class="nav-link " data-toggle="tab" href="#pd-desc">DESCRIPTION</a></li>
                           
                              
                            </ul>
                        </div>
                        <div class="tab-content">

                            <div class="tab-pane fade " id="pd-desc">
                                <div class="pd-tab__desc">
                                    <div class="u-s-m-b-15">
                                        <p>{product.description}</p>
                                    </div>
                                    <div class="u-s-m-b-30"><iframe src="https://www.youtube.com/embed/qKqSBm07KZk" allowfullscreen></iframe></div>
                                    <div class="u-s-m-b-30">
                                        <ul>
                                            <li><i class="fas fa-check u-s-m-r-8"></i>

                                                <span>Buyer Protection.</span></li>
                                            <li><i class="fas fa-check u-s-m-r-8"></i>

                                                <span>Full Refund if you don't receive your order.</span></li>
                                            <li><i class="fas fa-check u-s-m-r-8"></i>

                                                <span>Returns accepted if product not as described.</span></li>
                                        </ul>
                                    </div>
                                    
                                
                                </div>
                            </div>
                          
                       
                       
                            <div class="tab-pane show active" id="pd-rev">
                                <div class="pd-tab__rev">
                                    
                                    <div class="u-s-m-b-30">
                                        <form class="pd-tab__rev-f1">
                                            <div class="rev-f1__group">
                                              
                                              
                                            </div>
                                            <div class="rev-f1__review">
                                              {comments.map(x=><CommentItem key={x._id} comment={x}/>)}               
                                            </div>
                                        </form>
                                    </div>
                                    <div class="u-s-m-b-30">
                                        <form onSubmit={(e)=>   
                                          {  e.preventDefault();
                                            addComment(id, { text });
                                            setText('');}} class="pd-tab__rev-f2">
                                          

                                          
                                            <div class="rev-f2__group">
                                                <div class="u-s-m-b-15">

                                                    <label class="gl-label" for="reviewer-text">YOUR COMMENT *</label><textarea  value={text}
                              onChange={(e) => setText(e.target.value)} class="text-area text-area--primary-style" id="reviewer-text"></textarea></div>
                                             
                                            </div>
                                            <div>

                                                <input value='Submit' class="btn btn--e-brand-shadow" type="submit"/></div>
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
    <div class="u-s-p-b-90">

    </div>
</div>

</Fragment>
  );
};

DetailProduit.propTypes = {
    getProduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    getComment:PropTypes.func.isRequired,
  };
  const mapStateToProps = (state) => ({
    product: state.product,
    comment:state.comment
  });
    
  export default connect(mapStateToProps, { getProduct,addComment,getComment })(DetailProduit);

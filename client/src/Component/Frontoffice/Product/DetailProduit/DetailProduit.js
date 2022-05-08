import React,{Fragment,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import {getProduct} from '../../../../actions/product'
import Spinner from '../../../Layout/Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment, getComment } from '../../../../actions/comment';
import CommentItem from './CommentItem';
import PropositionItem from './PropositionItem';
import { AddProposition, getPropositions } from '../../../../actions/proposition';
import { useSearchParams } from 'react-router-dom';
import FormItemProposition from './FormItemProposition';

function DetailProduit({AddProposition,getProduct,addComment,getComment,getPropositions ,comment:{comments},proposition:{propositions},product:{product,loading},auth:{isAuthenticated}}) {
    const [text, setText] = useState('');
    const [searchParams] = useSearchParams();


    useEffect(() => {
        getProduct(searchParams.get("id"));
        getComment(searchParams.get("id"));
        getPropositions(searchParams.get("id"));
      }, [getProduct, searchParams.get("id")]);
   


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
                          
                            <li class="is-marked">

                                <a href="shop-side-version-2.html">{product.name}</a></li>
                        </ul>
                    </div>
           
                    <div class="pd u-s-m-b-30">
                    <img  src={`assetes/image/product/${product.image}`} alt="img" className="u-img-fluid"/>
                     
                    </div>
                </div>
                <div class="col-lg-7">

                    <div class="pd-detail">
                        <div>

                            <span class="pd-detail__name">{product.name}</span></div>
                        <div>

                            {product.dealType=="UsedProduct" ? <div class="pd-detail__inline">

<span class="pd-detail__price">{product.price} DT</span>

</div>: <div class="pd-detail__inline">

<span class="pd-detail__price"></span>

</div>}
                          
                        </div>
                    
                        <div class="u-s-m-b-15">
                            
                        </div>
                        <div class="u-s-m-b-15">

                            <span class="pd-detail__preview-desc">{product.description}</span></div>
                        <div class="u-s-m-b-15">
                            {isAuthenticated?
                            <div class="pd-detail__inline">

                                <span class="pd-detail__click-wrap"><i class="far fa-heart u-s-m-r-6"></i>

                                    <a href="signin.html">Add to Wishlist</a>

                                  </span></div>
                                  :<Fragment></Fragment>}
                        </div>
                        <div class="u-s-m-b-15">
                      
                        </div>
                      
                        <div class="u-s-m-b-15">
                            {isAuthenticated? <form class="pd-detail__form">
                                <div class="pd-detail-inline-2">
                                    <div class="u-s-m-b-15">

                                      
                                    </div>
                                    <div class="u-s-m-b-15">

                                        <button class="btn btn--e-brand-b-2" type="submit">Add to Cart</button></div>
                                </div>
                            </form>:<Fragment></Fragment>}
                           
                        </div>
                        <div class="u-s-m-b-15">

                            <span class="pd-detail__label u-s-m-b-8">Product Policy:</span>
                            <ul class="pd-detail__policy-list">
                                <li><i class="fas fa-check-circle u-s-m-r-8"></i>

                                    <span>Buyer Protection.</span></li>
                                <li><i class="fas fa-check-circle u-s-m-r-8"></i>

                                    <span>Full Refund if you don't receive your order.</span></li>
                        
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
                                {product.dealType=="Exchange"?<li><a class="nav-link" id="view-review" data-toggle="tab" href="#pd-prop">PROPOSITIONS
<span></span></a></li>:null}

                            </ul>
                        </div>
                        <div class="tab-content">

                        <div class="tab-pane" id="pd-prop">
                                <div class="pd-tab__rev">
                                    <div class="u-s-m-b-30">
                                        <form class="pd-tab__rev-f1">
                                          
                                        <div className="shop-p__collection">
              <div className="row is-grid-active">
                                                
{propositions.map(x=>(<PropositionItem   key={x._id} proposition={x}/>))}
                                            </div>
                                               
                                            </div>
                                        </form>
                                    </div>
                                    <div class="u-s-m-b-30">
                                    {isAuthenticated? 

<FormItemProposition id={searchParams.get("id")}/>        
:<Fragment></Fragment>} 
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
                                    {isAuthenticated? 
                                    <div class="u-s-m-b-30">
                                        <form onSubmit={(e)=>   
                                          {  e.preventDefault();
                                                 addComment(searchParams.get("id"), { text });
                                            setText('');}} class="pd-tab__rev-f2">
                                            <div class="rev-f2__group">
                                                <div class="u-s-m-b-15">

                                                    <label class="gl-label" for="reviewer-text">YOUR COMMENT *</label><textarea  value={text}

                                                     onChange={(e) => setText(e.target.value.replace("bro","***"))} class="text-area text-area--primary-style" id="reviewer-text"></textarea></div>
                                             
                                            </div>
                                            <div>

                                                <input value='Submit' class="btn btn--e-brand-shadow" type="submit"/></div>
                                        </form>
                                    </div>:<Fragment></Fragment>}
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
    getPropositions:PropTypes.func.isRequired,
  };
  const mapStateToProps = (state) => ({
    product: state.product,
    comment:state.comment,
    proposition:state.proposition,
    auth:state.auth
  });
    
  export default connect(mapStateToProps, { getProduct,addComment,getComment ,getPropositions})(DetailProduit);

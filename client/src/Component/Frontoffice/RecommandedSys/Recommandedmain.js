import React ,{Fragment,useEffect,useState}from 'react'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Addwishlist } from '../../../actions/wishlist';
import { AddPanier, GetPanier } from '../../../actions/panier';
import { RecommandedSys } from '../../../actions/product';
import Spinner from '../../Layout/Spinner';



const ListProduct =({GetPanier,AddPanier,RecommandedSys,Addwishlist ,panier:{panier},product:{products,loading},auth:{user}}) =>{
  
let test=0
  const [dealType, setdeal] = useState('UsedProduct');
  const [Search, setSearch] = useState('');
  
  const [MinPrice, setMin] = useState();
  const [MaxPrice, setMax] = useState();
    useEffect(() => {
      GetPanier();
      RecommandedSys();
      },[]);
      const onChange1 = (e) => {
        setdeal( "UsedProduct" );
      };
      const onChange2 = (e) => {
        setdeal( "Exchange" );
      };
      const onChange3 = (e) => {
        setdeal("Donation" );
      };
      const onChangePriceMin = (e) => {
        setMin( e.target.value);
      };
      const onChangePriceMax = (e) => {
        setMax( e.target.value);
      };
      const handleChange = (e) => {
        setSearch(e.target.value);
      };
      const addtomypanier=(id,price)=>{
        user.Total=user.Total+price
        AddPanier(id)
      }
  return (
    
    <Fragment>
    {loading ? (
      <Spinner />
    ) : (
      <Fragment>
      <div>
 <div>
 
 
  <div id="app">

    <div className="app-content">
      {/*====== Section 1 ======*/}
      <div className="u-s-p-y-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
            <div className="shop-w-master">
                <h1 className="shop-w-master__heading u-s-m-b-30"><i className="fas fa-filter u-s-m-r-8" />
                  <span>FILTERS</span></h1>
                <div className="shop-w-master__sidebar sidebar--bg-snow">
                  <div className="u-s-m-b-30">
          
                  </div>
                  <div className="u-s-m-b-30">
                    <div className="shop-w">
                      <div className="shop-w__intro-wrap">
                        <h1 className="shop-w__h">RATING</h1>
                        <span className="fas fa-minus shop-w__toggle" data-target="#s-rating" data-toggle="collapse" />
                      </div>
                      <div className="shop-w__wrap collapse show" id="s-rating">
                        <ul className="shop-w__list gl-scroll">
                          <li>
                            <div className="rating__check">
                              <input type="checkbox" />
                              <div className="rating__check-star-wrap"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
                            </div>
                            <span className="shop-w__total-text">(2)</span>
                          </li>
                          <li>
                            <div className="rating__check">
                              <input type="checkbox" />
                              <div className="rating__check-star-wrap"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" />
                                <span>&amp; Up</span></div>
                            </div>
                            <span className="shop-w__total-text">(8)</span>
                          </li>
                          <li>
                            <div className="rating__check">
                              <input type="checkbox" />
                              <div className="rating__check-star-wrap"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" />
                                <span>&amp; Up</span></div>
                            </div>
                            <span className="shop-w__total-text">(10)</span>
                          </li>
                          <li>
                            <div className="rating__check">
                              <input type="checkbox" />
                              <div className="rating__check-star-wrap"><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" />
                                <span>&amp; Up</span></div>
                            </div>
                            <span className="shop-w__total-text">(12)</span>
                          </li>
                          <li>
                            <div className="rating__check">
                              <input type="checkbox" />
                              <div className="rating__check-star-wrap"><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" />
                                <span>&amp; Up</span></div>
                            </div>
                            <span className="shop-w__total-text">(1)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="u-s-m-b-30">
                 
                  </div>
                  <div className="u-s-m-b-30">
                    <div className="shop-w">
                      <div className="shop-w__intro-wrap">
                        <h1 className="shop-w__h">PRICE</h1>
                        <span className="fas fa-minus shop-w__toggle" data-target="#s-price" data-toggle="collapse" />
                      </div>
                      <div className="shop-w__wrap collapse show" id="s-price">
                        <form className="shop-w__form-p">
                          <div className="shop-w__form-p-wrap">
                            <div>
                              <label htmlFor="price-min" />
                              <input className="input-text input-text--primary-style" type="text"  id="price-min" onChange={(e)=>onChangePriceMin(e)} placeholder="Min" /></div>
                            <div>
                              <label htmlFor="price-max" />
                              <input className="input-text input-text--primary-style" type="text" id="price-max" onChange={(e)=>onChangePriceMax(e)}  placeholder="Max" /></div>
                            <div>
                              <button className="btn btn--icon fas fa-angle-right btn--e-transparent-platinum-b-2" type="submit" /></div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="u-s-m-b-30">
                 
                  </div>
               
                  <div className="u-s-m-b-30">
                    <div className="shop-w">
                      
                      <div className="shop-w__wrap collapse" id="s-size">
                        <ul className="shop-w__list gl-scroll">
                          <li>
                            {/*====== Check Box ======*/}
                            <div className="check-box">
                              <input type="checkbox" id="xs" />
                              <div className="check-box__state check-box__state--primary">
                                <label className="check-box__label" htmlFor="xs">XS</label></div>
                            </div>
                            {/*====== End - Check Box ======*/}
                            <span className="shop-w__total-text">(2)</span>
                          </li>
                          <li>
                            {/*====== Check Box ======*/}
                            <div className="check-box">
                              <input type="checkbox" id="small" />
                              <div className="check-box__state check-box__state--primary">
                                <label className="check-box__label" htmlFor="small">Small</label></div>
                            </div>
                            {/*====== End - Check Box ======*/}
                            <span className="shop-w__total-text">(4)</span>
                          </li>
                          <li>
                            {/*====== Check Box ======*/}
                            <div className="check-box">
                              <input type="checkbox" id="medium" />
                              <div className="check-box__state check-box__state--primary">
                                <label className="check-box__label" htmlFor="medium">Medium</label></div>
                            </div>
                            {/*====== End - Check Box ======*/}
                            <span className="shop-w__total-text">(6)</span>
                          </li>
                          <li>
                            {/*====== Check Box ======*/}
                            <div className="check-box">
                              <input type="checkbox" id="large" />
                              <div className="check-box__state check-box__state--primary">
                                <label className="check-box__label" htmlFor="large">Large</label></div>
                            </div>
                            {/*====== End - Check Box ======*/}
                            <span className="shop-w__total-text">(8)</span>
                          </li>
                          <li>
                            {/*====== Check Box ======*/}
                            <div className="check-box">
                              <input type="checkbox" id="xl" />
                              <div className="check-box__state check-box__state--primary">
                                <label className="check-box__label" htmlFor="xl">XL</label></div>
                            </div>
                            {/*====== End - Check Box ======*/}
                            <span className="shop-w__total-text">(10)</span>
                          </li>
                          <li>
                            {/*====== Check Box ======*/}
                            <div className="check-box">
                              <input type="checkbox" id="xxl" />
                              <div className="check-box__state check-box__state--primary">
                                <label className="check-box__label" htmlFor="xxl">XXL</label></div>
                            </div>
                            {/*====== End - Check Box ======*/}
                            <span className="shop-w__total-text">(12)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="shop-p">
                <div className="shop-p__toolbar u-s-m-b-30">
              
                  <div className="main-form">
              <label htmlFor="main-search" />
              <input className="input-text input-text--border-radius input-text--style-1" type="text" onChange={(e)=>handleChange(e)} id="main-search" placeholder="Search" />
              <button className="btn btn--icon fas fa-search main-search-button" type="submit" /></div>
                  <div className="shop-p__tool-style">
                    
                 
                  </div>
                </div>
                <div className="shop-p__collection">
                  <div className="row is-grid-active">
                  {products.filter(el =>
                            el.name.toLowerCase().includes(Search.toLowerCase())).map((x,i)=>( 
x.dealType == dealType?(
MinPrice ==null && MaxPrice ==null ||MinPrice<= x.price && MaxPrice >=x.price||  MinPrice<= x.price && MaxPrice==null||MaxPrice >=x.price &&MinPrice==null ?(
<div  key={i} className="col-lg-4 col-md-6 col-sm-6">
  {/* <h1>{x.dealType} ={dealType}</h1> */}
  <div className="product-m">
 
 <div className="product-m__thumb">
 <Link to={`/myproduct?id=${x._id}`} className="aspect aspect--bg-grey aspect--square u-d-block" >
 
 <img className="aspect__img" src={`assetes/image/product/${x.image}`}/>
 </Link> 

   <div className="product-m__quick-look">
     <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
  
     {panier.map((ele,i)=>ele.product==x._id ?(<div hidden>{test=test+1}</div>):(null))}

    {test==0 ?
   
    (       
       <div  className="product-m__add-cart"> 
       
            <a  onClick={() => addtomypanier(x._id,x.price)} className="btn--e-brand" data-modal="modal"  data-modal-id="#Delete-from-cart">Add To Card</a>
    </div>): (
     <div  className="product-m__add-cart"> 
<a  className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Already In Card</a>
<div hidden> {test=0}</div>

     </div>
    )}

  
 </div>
 <div className="product-m__content">
   <div className="product-m__category">
     <a href="shop-side-version-2.html">{x.dealType}</a></div>
   <div className="product-m__name">
   <Link to={`/myproduct?id=${x._id}`} >{x.name}</Link></div>
   <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-" /><i className="far fa-star" /><i className="far fa-star" />
    
     <span className="product-m__review">(23)</span></div>
  {x.dealType=="UsedProduct"?    <div className="product-m__price">{x.price}</div>:null}

   <div className="product-m__hover">
     <div className="product-m__preview-description">
       <span>{x.description}</span></div>
     <div className="product-m__wishlist">
       <div  onClick={() => Addwishlist(x._id)} className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" /></div>
   </div>
 </div>
</div>
</div>



):null):null  ))}
               
                      
                   
                  </div>
                </div>
                <div className="u-s-p-y-60">
                  {/*====== Pagination ======*/}
                  <ul className="shop-p__pagination">
                    <li className="is-active">
                      <a href="shop-grid-left.html">1</a></li>
                    <li>
                      <a href="shop-grid-left.html">2</a></li>
                    <li>
                      <a href="shop-grid-left.html">3</a></li>
                    <li>
                      <a href="shop-grid-left.html">4</a></li>
                    <li>
                      <a className="fas fa-angle-right" href="shop-grid-left.html" /></li>
                  </ul>
                  {/*====== End - Pagination ======*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== End - Section 1 ======*/}
    </div>
    {/*====== End - App Content ======*/}
    {/*====== Main Footer ======*/}
 
    {/*====== Modal Section ======*/}
    {/*====== Quick Look Modal ======*/}
    <div className="modal fade" id="quick-look">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal--shadow">
          <button className="btn dismiss-button fas fa-times" type="button" data-dismiss="modal" />
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-5">
                {/*====== Product Breadcrumb ======*/}
                <div className="pd-breadcrumb u-s-m-b-30">
                  <ul className="pd-breadcrumb__list">
                    <li className="has-separator">
                      <a href="index.hml">Home</a></li>
                    <li className="has-separator">
                      <a href="shop-side-version-2.html">Electronics</a></li>
                    <li className="has-separator">
                      <a href="shop-side-version-2.html">DSLR Cameras</a></li>
                    <li className="is-marked">
                      <a href="shop-side-version-2.html">Nikon Cameras</a></li>
                  </ul>
                </div>
                {/*====== End - Product Breadcrumb ======*/}
                {/*====== Product Detail ======*/}
                <div className="pd u-s-m-b-30">
                  <div className="pd-wrap">
                    <div id="js-product-detail-modal">
                      <div>
                        <img className="u-img-fluid" src="assetes/images/product/product-d-1.jpg"  /></div>
                      <div>
                        <img className="u-img-fluid" src="assetes/images/product/product-d-2.jpg"  /></div>
                      <div>
                        <img className="u-img-fluid" src="assetes/images/product/product-d-3.jpg"  /></div>
                      <div>
                        <img className="u-img-fluid" src="assetes/images/product/product-d-4.jpg"  /></div>
                      <div>
                        <img className="u-img-fluid" src="assetes/images/product/product-d-5.jpg"  /></div>
                    </div>
                  </div>
                  <div className="u-s-m-t-15">
                    <div id="js-product-detail-modal-thumbnail">
                      <div>
                        <img className="u-img-fluid" src="assetes/images/product/product-d-1.jpg"  /></div>
                      <div>
                        <img className="u-img-fluid" src="assetes/images/product/product-d-2.jpg"  /></div>
                      <div>
                        <img className="u-img-fluid" src="assetes/images/product/product-d-3.jpg"  /></div>
                      <div>
                        <img className="u-img-fluid" src="assetes/images/product/product-d-4.jpg"  /></div>
                      <div>
                        <img className="u-img-fluid" src="assetes/images/product/product-d-5.jpg"  /></div>
                    </div>
                  </div>
                </div>
                {/*====== End - Product Detail ======*/}
              </div>
              <div className="col-lg-7">
                {/*====== Product Right Side Details ======*/}
                <div className="pd-detail">
                  <div>
                    <span className="pd-detail__name">Nikon Camera 4k Lens Zoom Pro</span></div>
                  <div>
                    <div className="pd-detail__inline">
                      <span className="pd-detail__price">$6.99</span>
                      <span className="pd-detail__discount">(76% OFF)</span><del className="pd-detail__del">$28.97</del></div>
                  </div>
                  <div className="u-s-m-b-15">
                    <div className="pd-detail__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-" />
                      <span className="pd-detail__review u-s-m-l-4">
                        <a href="product-detail.html">23 Reviews</a></span></div>
                  </div>
                  <div className="u-s-m-b-15">
                    <div className="pd-detail__inline">
                      <span className="pd-detail__stock">200 in stock</span>
                      <span className="pd-detail__left">Only 2 left</span></div>
                  </div>
                  <div className="u-s-m-b-15">
                    <span className="pd-detail__preview-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                  <div className="u-s-m-b-15">
                    <div className="pd-detail__inline">
                      <span className="pd-detail__click-wrap"><i className="far fa-heart u-s-m-r-6" />
                        <a href="signin.html">Add to Wishlist</a>
                        <span className="pd-detail__click-count">(222)</span></span></div>
                  </div>
                  <div className="u-s-m-b-15">
                    <div className="pd-detail__inline">
                      <span className="pd-detail__click-wrap"><i className="far fa-envelope u-s-m-r-6" />
                        <a href="signin.html">Email me When the price drops</a>
                        <span className="pd-detail__click-count">(20)</span></span></div>
                  </div>
                  <div className="u-s-m-b-15">
                    <ul className="pd-social-list">
                      <li>
                        <a className="s-fb--color-hover" href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li>
                        <a className="s-tw--color-hover" href="#"><i className="fab fa-twitter" /></a></li>
                      <li>
                        <a className="s-insta--color-hover" href="#"><i className="fab fa-instagram" /></a></li>
                      <li>
                        <a className="s-wa--color-hover" href="#"><i className="fab fa-whatsapp" /></a></li>
                      <li>
                        <a className="s-gplus--color-hover" href="#"><i className="fab fa-google-plus-g" /></a></li>
                    </ul>
                  </div>
                  <div className="u-s-m-b-15">
                    <form className="pd-detail__form">
                      <div className="pd-detail-inline-2">
                        <div className="u-s-m-b-15">
                          {/*====== Input Counter ======*/}
                          <div className="input-counter">
                            <span className="input-counter__minus fas fa-minus" />
                            <input className="input-counter__text input-counter--text-primary-style" type="text" defaultValue={1} data-min={1} data-max={1000} />
                            <span className="input-counter__plus fas fa-plus" /></div>
                          {/*====== End - Input Counter ======*/}
                        </div>


                        <div className="u-s-m-b-15">
                          <button  className="btn btn--e-brand-b-2" type="submit">Add to Cart</button></div>
                      </div>
                    </form>
                  </div>
                  <div className="u-s-m-b-15">
                    <span className="pd-detail__label u-s-m-b-8">Product Policy:</span>
                    <ul className="pd-detail__policy-list">
                      <li><i className="fas fa-check-circle u-s-m-r-8" />
                        <span>Buyer Protection.</span></li>
                      <li><i className="fas fa-check-circle u-s-m-r-8" />
                        <span>Full Refund if you don't receive your order.</span></li>
                      <li><i className="fas fa-check-circle u-s-m-r-8" />
                        <span>Returns accepted if product not as described.</span></li>
                    </ul>
                  </div>
                </div>
                {/*====== End - Product Right Side Details ======*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*====== End - Quick Look Modal ======*/}
    {/*====== Add to Cart Modal ======*/}
    <div className="modal fade" id="add-to-cart">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal-radius modal-shadow">
          <button className="btn dismiss-button fas fa-times" type="button" data-dismiss="modal" />
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="success u-s-m-b-30">
                  <div className="success__text-wrap"><i className="fas fa-check" />
                    <span>Item is added successfully!</span></div>
                  <div className="success__img-wrap">
                    <img className="u-img-fluid" src="assetes/images/product/electronic/product1.jpg"  /></div>
                  <div className="success__info-wrap">
                    <span className="success__name">Beats Bomb Wireless Headphone</span>
                    <span className="success__quantity">Quantity: 1</span>
                    <span className="success__price">$170.00</span></div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="s-option">
                  <span className="s-option__text">1 item (s) in your cart</span>
                  <div className="s-option__link-box">
                    <a className="s-option__link btn--e-white-brand-shadow" data-dismiss="modal">CONTINUE SHOPPING</a>
                    <a className="s-option__link btn--e-white-brand-shadow" href="cart.html">VIEW CART</a>
                    <a className="s-option__link btn--e-brand-shadow" href="checkout.html">PROCEED TO CHECKOUT</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</Fragment>
      )}
    </Fragment>
  );
};


ListProduct.propTypes = {
    product: PropTypes.object.isRequired,
    RecommandedSys: PropTypes.func.isRequired,
    panier: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    GetPanier: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    product: state.product,
    panier:state.panier,
    auth:state.auth
  });

export default connect(mapStateToProps, {RecommandedSys,Addwishlist,AddPanier,GetPanier})(ListProduct);

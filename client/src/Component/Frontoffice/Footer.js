import React from 'react'

function Footer() {
  return (
    <div>
         <footer>
      <div className="outer-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="outer-footer__content u-s-m-b-40">
                <span className="outer-footer__content-title">Contact Us</span>
                <div className="outer-footer__text-wrap"><i className="fas fa-home" />
                  <span>4247 Ashford Drive Virginia VA-20006 USA</span></div>
                <div className="outer-footer__text-wrap"><i className="fas fa-phone-volume" />
                  <span>(+0) 900 901 904</span></div>
                <div className="outer-footer__text-wrap"><i className="far fa-envelope" />
                  <span>contact@domain.com</span></div>
                <div className="outer-footer__social">
                  <ul>
                    <li>
                      <a className="s-fb--color-hover" href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li>
                      <a className="s-tw--color-hover" href="#"><i className="fab fa-twitter" /></a></li>
                    <li>
                      <a className="s-youtube--color-hover" href="#"><i className="fab fa-youtube" /></a></li>
                    <li>
                      <a className="s-insta--color-hover" href="#"><i className="fab fa-instagram" /></a></li>
                    <li>
                      <a className="s-gplus--color-hover" href="#"><i className="fab fa-google-plus-g" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="outer-footer__content u-s-m-b-40">
                    <span className="outer-footer__content-title">Information</span>
                    <div className="outer-footer__list-wrap">
                      <ul>
                        <li>
                          <a href="cart.html">Cart</a></li>
                        <li>
                          <a href="dashboard.html">Account</a></li>
                        <li>
                          <a href="shop-side-version-2.html">Manufacturer</a></li>
                        <li>
                          <a href="dash-payment-option.html">Finance</a></li>
                        <li>
                          <a href="shop-side-version-2.html">Shop</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="outer-footer__content u-s-m-b-40">
                    <div className="outer-footer__list-wrap">
                      <span className="outer-footer__content-title">Our Company</span>
                      <ul>
                        <li>
                          <a href="about.html">About us</a></li>
                        <li>
                          <a href="contact.html">Contact Us</a></li>
                        <li>
                          <a href="index.html">Sitemap</a></li>
                        <li>
                          <a href="dash-my-order.html">Delivery</a></li>
                        <li>
                          <a href="shop-side-version-2.html">Store</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="outer-footer__content">
                <span className="outer-footer__content-title">Join our Newsletter</span>
                <form className="newsletter">
                  <div className="u-s-m-b-15">
                    <div className="radio-box newsletter__radio">
                      <input type="radio" id="male" name="gender" />
                      <div className="radio-box__state radio-box__state--primary">
                        <label className="radio-box__label" htmlFor="male">Male</label></div>
                    </div>
                    <div className="radio-box newsletter__radio">
                      <input type="radio" id="female" name="gender" />
                      <div className="radio-box__state radio-box__state--primary">
                        <label className="radio-box__label" htmlFor="female">Female</label></div>
                    </div>
                  </div>
                  <div className="newsletter__group">
                    <label htmlFor="newsletter" />
                    <input className="input-text input-text--only-white" type="text" id="newsletter" placeholder="Enter your Email" />
                    <button className="btn btn--e-brand newsletter__btn" type="submit">SUBSCRIBE</button></div>
                  <span className="newsletter__text">Subscribe to the mailing list to receive updates on promotions, new arrivals, discount and coupons.</span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="lower-footer__content">
                <div className="lower-footer__copyright">
                  <span>Copyright © 2018</span>
                  <a href="index.html">Reshop</a>
                  <span>All Right Reserved</span></div>
                <div className="lower-footer__payment">
                  <ul>
                    <li><i className="fab fa-cc-stripe" /></li>
                    <li><i className="fab fa-cc-paypal" /></li>
                    <li><i className="fab fa-cc-mastercard" /></li>
                    <li><i className="fab fa-cc-visa" /></li>
                    <li><i className="fab fa-cc-discover" /></li>
                    <li><i className="fab fa-cc-amex" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
                          <button className="btn btn--e-brand-b-2" type="submit">Add to Cart</button></div>
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
    {/*====== End - Add to Cart Modal ======*/}
    {/*====== Newsletter Subscribe Modal ======*/}
    <div className="modal fade new-l" id="newsletter-modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal--shadow">
          <button className="btn new-l__dismiss fas fa-times" type="button" data-dismiss="modal" />
          <div className="modal-body">
            <div className="row u-s-m-x-0">
              <div className="col-lg-6 new-l__col-1 u-s-p-x-0">
                <a className="new-l__img-wrap u-d-block" href="shop-side-version-2.html">
                  <img className="u-img-fluid u-d-block" src="assetes/images/newsletter/newsletter.jpg"  /></a></div>
              <div className="col-lg-6 new-l__col-2">
                <div className="new-l__section u-s-m-t-30">
                  <div className="u-s-m-b-8 new-l--center">
                    <h3 className="new-l__h3">Newsletter</h3>
                  </div>
                  <div className="u-s-m-b-30 new-l--center">
                    <p className="new-l__p1">Sign up for emails to get the scoop on new arrivals, special sales and more.</p>
                  </div>
                  <form className="new-l__form">
                    <div className="u-s-m-b-15">
                      <input className="news-l__input" type="text" placeholder="E-mail Address" /></div>
                    <div className="u-s-m-b-15">
                      <button className="btn btn--e-brand-b-2" type="submit">Sign up!</button></div>
                  </form>
                  <div className="u-s-m-b-15 new-l--center">
                    <p className="new-l__p2">By Signing up, you agree to receive Reshop offers,<br />promotions and other commercial messages. You may unsubscribe at any time.</p>
                  </div>
                  <div className="u-s-m-b-15 new-l--center">
                    <a className="new-l__link" data-dismiss="modal">No Thanks</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <script src="https://www.google-analytics.com/analytics.js" async defer></script>

    <script src="%PUBLIC_URL%/assetes/js/vendor.js"></script>

    <script src="%PUBLIC_URL%/assetes/js/jquery.shopnav.js"></script>

    <script src="%PUBLIC_URL%/assetes/js/app.js"></script>

    
    </div>
  )
}

export default Footer
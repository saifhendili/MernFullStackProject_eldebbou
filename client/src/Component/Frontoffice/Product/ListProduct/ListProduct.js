import React ,{Fragment,useEffect}from 'react'

import { GetProducts } from '../../../../actions/product';
import Spinner from '../../../Layout/Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Addwishlist } from '../../../../actions/wishlist';



const ListProduct =({GetProducts,Addwishlist ,product:{products,loading}}) =>{
    useEffect(() => {
        GetProducts();
      }, [GetProducts]);
    
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
                    <div className="shop-w">
                      <div className="shop-w__intro-wrap">
                        <h1 className="shop-w__h">CATEGORY</h1>
                        <span className="fas fa-minus shop-w__toggle" data-target="#s-category" data-toggle="collapse" />
                      </div>
                      <div className="shop-w__wrap collapse show" id="s-category">
                        <ul className="shop-w__category-list gl-scroll">
                          <li className="has-list">
                            <a href="#">Electronics</a>
                            <span className="category-list__text u-s-m-l-6">(23)</span>
                            <span className="js-shop-category-span is-expanded fas fa-plus u-s-m-l-6" />
                            <ul style={{display: 'block'}}>
                              <li className="has-list">
                                <a href="#">3D Printer &amp; Supplies</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">3d Printer</a></li>
                                  <li>
                                    <a href="#">3d Printing Pen</a></li>
                                  <li>
                                    <a href="#">3d Printing Accessories</a></li>
                                  <li>
                                    <a href="#">3d Printer Module Board</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Home Audio &amp; Video</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">TV Boxes</a></li>
                                  <li>
                                    <a href="#">TV Receiver &amp; Accessories</a></li>
                                  <li>
                                    <a href="#">3d Printing Accessories</a></li>
                                  <li>
                                    <a href="#">3d Printer Module Board</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Media Players</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Earphones</a></li>
                                  <li>
                                    <a href="#">Mp3 Players</a></li>
                                  <li>
                                    <a href="#">Speakers &amp; Radios</a></li>
                                  <li>
                                    <a href="#">Microphones</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Video Game Accessories</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Nintendo Video Games Accessories</a></li>
                                  <li>
                                    <a href="#">Sony Video Games Accessories</a></li>
                                  <li>
                                    <a href="#">Xbox Video Games Accessories</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Security &amp; Protection</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Security Cameras</a></li>
                                  <li>
                                    <a href="#">Alarm System</a></li>
                                  <li>
                                    <a href="#">Security Gadgets</a></li>
                                  <li>
                                    <a href="#">CCTV Security Accessories</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Home Audio &amp; Video</a>
                                <span className="js-shop-category-span is-expanded fas fa-plus u-s-m-l-6" />
                                <ul style={{display: 'block'}}>
                                  <li>
                                    <a href="#">TV Boxes</a></li>
                                  <li>
                                    <a href="#">TV Receiver &amp; Accessories</a></li>
                                  <li>
                                    <a href="#">3d Printing Accessories</a></li>
                                  <li>
                                    <a href="#">3d Printer Module Board</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Photography &amp; Camera</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Digital Cameras</a></li>
                                  <li>
                                    <a href="#">Sport Camera &amp; Accessories</a></li>
                                  <li>
                                    <a href="#">Camera Accessories</a></li>
                                  <li>
                                    <a href="#">Lenses &amp; Accessories</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Arduino Compatible</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Raspberry Pi &amp; Orange Pi</a></li>
                                  <li>
                                    <a href="#">Module Board</a></li>
                                  <li>
                                    <a href="#">Smart Robot</a></li>
                                  <li>
                                    <a href="#">Board Kits</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">DSLR Camera</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Nikon Camera</a></li>
                                  <li>
                                    <a href="#">Canon Camera</a></li>
                                  <li>
                                    <a href="#">Sony Camera</a></li>
                                  <li>
                                    <a href="#">DSLR Lenses</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Necessary Accessories</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Flash Cards</a></li>
                                  <li>
                                    <a href="#">Memory Cards</a></li>
                                  <li>
                                    <a href="#">Flash Pins</a></li>
                                  <li>
                                    <a href="#">Compact Discs</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="has-list">
                            <a href="#">Women's Clothing</a>
                            <span className="category-list__text u-s-m-l-6">(5)</span>
                            <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                            <ul>
                              <li className="has-list">
                                <a href="#">Hot Categories</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Dresses</a></li>
                                  <li>
                                    <a href="#">Blouses &amp; Shirts</a></li>
                                  <li>
                                    <a href="#">T-shirts</a></li>
                                  <li>
                                    <a href="#">Rompers</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Intimates</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Bras</a></li>
                                  <li>
                                    <a href="#">Brief Sets</a></li>
                                  <li>
                                    <a href="#">Bustiers &amp; Corsets</a></li>
                                  <li>
                                    <a href="#">Panties</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Wedding &amp; Events</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Wedding Dresses</a></li>
                                  <li>
                                    <a href="#">Evening Dresses</a></li>
                                  <li>
                                    <a href="#">Prom Dresses</a></li>
                                  <li>
                                    <a href="#">Flower Dresses</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Bottoms</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Skirts</a></li>
                                  <li>
                                    <a href="#">Shorts</a></li>
                                  <li>
                                    <a href="#">Leggings</a></li>
                                  <li>
                                    <a href="#">Jeans</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Outwear</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Blazers</a></li>
                                  <li>
                                    <a href="#">Basic Jackets</a></li>
                                  <li>
                                    <a href="#">Trench</a></li>
                                  <li>
                                    <a href="#">Leather &amp; Suede</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Jackets</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Denim Jackets</a></li>
                                  <li>
                                    <a href="#">Trucker Jackets</a></li>
                                  <li>
                                    <a href="#">Windbreaker Jackets</a></li>
                                  <li>
                                    <a href="#">Leather Jackets</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Accessories</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Tech Accessories</a></li>
                                  <li>
                                    <a href="#">Headwear</a></li>
                                  <li>
                                    <a href="#">Baseball Caps</a></li>
                                  <li>
                                    <a href="#">Belts</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Other Accessories</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Bags</a></li>
                                  <li>
                                    <a href="#">Wallets</a></li>
                                  <li>
                                    <a href="#">Watches</a></li>
                                  <li>
                                    <a href="#">Sunglasses</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="has-list">
                            <a href="#">Men's Clothing</a>
                            <span className="category-list__text u-s-m-l-6">(5)</span>
                            <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                            <ul>
                              <li className="has-list">
                                <a href="#">Hot Sale</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">T-Shirts</a></li>
                                  <li>
                                    <a href="#">Tank Tops</a></li>
                                  <li>
                                    <a href="#">Polo</a></li>
                                  <li>
                                    <a href="#">Shirts</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Outwear</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Hoodies</a></li>
                                  <li>
                                    <a href="#">Trench</a></li>
                                  <li>
                                    <a href="#">Parkas</a></li>
                                  <li>
                                    <a href="#">Sweaters</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Bottoms</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Casual Pants</a></li>
                                  <li>
                                    <a href="#">Cargo Pants</a></li>
                                  <li>
                                    <a href="#">Jeans</a></li>
                                  <li>
                                    <a href="#">Shorts</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Underwear</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Boxers</a></li>
                                  <li>
                                    <a href="#">Briefs</a></li>
                                  <li>
                                    <a href="#">Robes</a></li>
                                  <li>
                                    <a href="#">Socks</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Jackets</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Denim Jackets</a></li>
                                  <li>
                                    <a href="#">Trucker Jackets</a></li>
                                  <li>
                                    <a href="#">Windbreaker Jackets</a></li>
                                  <li>
                                    <a href="#">Leather Jackets</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Sunglasses</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Pilot</a></li>
                                  <li>
                                    <a href="#">Wayfarer</a></li>
                                  <li>
                                    <a href="#">Square</a></li>
                                  <li>
                                    <a href="#">Round</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Accessories</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Eyewear Frames</a></li>
                                  <li>
                                    <a href="#">Scarves</a></li>
                                  <li>
                                    <a href="#">Hats</a></li>
                                  <li>
                                    <a href="#">Belts</a></li>
                                </ul>
                              </li>
                              <li className="has-list">
                                <a href="#">Other Accessories</a>
                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                <ul>
                                  <li>
                                    <a href="#">Bags</a></li>
                                  <li>
                                    <a href="#">Wallets</a></li>
                                  <li>
                                    <a href="#">Watches</a></li>
                                  <li>
                                    <a href="#">Tech Accessories</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Food &amp; Supplies</a>
                            <span className="category-list__text u-s-m-l-6">(0)</span></li>
                          <li>
                            <a href="#">Furniture &amp; Decor</a>
                            <span className="category-list__text u-s-m-l-6">(0)</span></li>
                          <li>
                            <a href="#">Sports &amp; Game</a>
                            <span className="category-list__text u-s-m-l-6">(0)</span></li>
                          <li>
                            <a href="#">Beauty &amp; Heh</a>
                            <span className="category-list__text u-s-m-l-6">(0)</span></li>
                        </ul>
                      </div>
                    </div>
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
                    <div className="shop-w">
                      <div className="shop-w__intro-wrap">
                        <h1 className="shop-w__h">SHIPPING</h1>
                        <span className="fas fa-minus shop-w__toggle" data-target="#s-shipping" data-toggle="collapse" />
                      </div>
                      <div className="shop-w__wrap collapse show" id="s-shipping">
                        <ul className="shop-w__list gl-scroll">
                          <li>
                            {/*====== Check Box ======*/}
                            <div className="check-box">
                              <input type="checkbox" id="free-shipping" />
                              <div className="check-box__state check-box__state--primary">
                                <label className="check-box__label" htmlFor="free-shipping">Free Shipping</label></div>
                            </div>
                            {/*====== End - Check Box ======*/}
                          </li>
                        </ul>
                      </div>
                    </div>
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
                              <input className="input-text input-text--primary-style" type="text" id="price-min" placeholder="Min" /></div>
                            <div>
                              <label htmlFor="price-max" />
                              <input className="input-text input-text--primary-style" type="text" id="price-max" placeholder="Max" /></div>
                            <div>
                              <button className="btn btn--icon fas fa-angle-right btn--e-transparent-platinum-b-2" type="submit" /></div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="u-s-m-b-30">
                    <div className="shop-w">
                      <div className="shop-w__intro-wrap">
                        <h1 className="shop-w__h">MANUFACTURER</h1>
                        <span className="fas fa-minus shop-w__toggle" data-target="#s-manufacturer" data-toggle="collapse" />
                      </div>
                      <div className="shop-w__wrap collapse show" id="s-manufacturer">
                        <ul className="shop-w__list-2">
                          <li>
                            <div className="list__content">
                              <input type="checkbox" defaultChecked />
                              <span>Calvin Klein</span></div>
                            <span className="shop-w__total-text">(23)</span>
                          </li>
                          <li>
                            <div className="list__content">
                              <input type="checkbox" />
                              <span>Diesel</span></div>
                            <span className="shop-w__total-text">(2)</span>
                          </li>
                          <li>
                            <div className="list__content">
                              <input type="checkbox" />
                              <span>Polo</span></div>
                            <span className="shop-w__total-text">(2)</span>
                          </li>
                          <li>
                            <div className="list__content">
                              <input type="checkbox" />
                              <span>Tommy Hilfiger</span></div>
                            <span className="shop-w__total-text">(9)</span>
                          </li>
                          <li>
                            <div className="list__content">
                              <input type="checkbox" />
                              <span>Ndoge</span></div>
                            <span className="shop-w__total-text">(3)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="u-s-m-b-30">
                    <div className="shop-w">
                      <div className="shop-w__intro-wrap">
                        <h1 className="shop-w__h">COLOR</h1>
                        <span className="fas fa-minus shop-w__toggle" data-target="#s-color" data-toggle="collapse" />
                      </div>
                      <div className="shop-w__wrap collapse show" id="s-color">
                        <ul className="shop-w__list gl-scroll">
                          <li>
                            <div className="color__check">
                              <input type="checkbox" id="jet" />
                              <label className="color__check-label" htmlFor="jet" style={{backgroundColor: '#333333'}} /></div>
                            <span className="shop-w__total-text">(2)</span>
                          </li>
                          <li>
                            <div className="color__check">
                              <input type="checkbox" id="folly" />
                              <label className="color__check-label" htmlFor="folly" style={{backgroundColor: '#FF0055'}} /></div>
                            <span className="shop-w__total-text">(4)</span>
                          </li>
                          <li>
                            <div className="color__check">
                              <input type="checkbox" id="yellow" />
                              <label className="color__check-label" htmlFor="yellow" style={{backgroundColor: '#FFFF00'}} /></div>
                            <span className="shop-w__total-text">(6)</span>
                          </li>
                          <li>
                            <div className="color__check">
                              <input type="checkbox" id="granite-gray" />
                              <label className="color__check-label" htmlFor="granite-gray" style={{backgroundColor: '#605F5E'}} /></div>
                            <span className="shop-w__total-text">(8)</span>
                          </li>
                          <li>
                            <div className="color__check">
                              <input type="checkbox" id="space-cadet" />
                              <label className="color__check-label" htmlFor="space-cadet" style={{backgroundColor: '#1D3461'}} /></div>
                            <span className="shop-w__total-text">(10)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="u-s-m-b-30">
                    <div className="shop-w">
                      <div className="shop-w__intro-wrap">
                        <h1 className="shop-w__h">SIZE</h1>
                        <span className="fas fa-minus collapsed shop-w__toggle" data-target="#s-size" data-toggle="collapse" />
                      </div>
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
                  <div className="shop-p__meta-wrap u-s-m-b-60">
                    <span className="shop-p__meta-text-1">FOUND 18 RESULTS</span>
                    <div className="shop-p__meta-text-2">
                      <span>Related Searches:</span>
                      <a className="gl-tag btn--e-brand-shadow" href="#">men's clothing</a>
                      <a className="gl-tag btn--e-brand-shadow" href="#">mobiles &amp; tablets</a>
                      <a className="gl-tag btn--e-brand-shadow" href="#">books &amp; audible</a></div>
                  </div>
                  <div className="shop-p__tool-style">
                    <div className="tool-style__group u-s-m-b-8">
                      <span className="js-shop-grid-target is-active">Grid</span>
                      <span className="js-shop-list-target">List</span></div>
                    <form>
                      <div className="tool-style__form-wrap">
                        <div className="u-s-m-b-8"><select className="select-box select-box--transparent-b-2">
                            <option>Show: 8</option>
                            <option defaultValue>Show: 12</option>
                            <option>Show: 16</option>
                            <option>Show: 28</option>
                          </select></div>
                        <div className="u-s-m-b-8"><select className="select-box select-box--transparent-b-2">
                            <option defaultValue>Sort By: Newest Items</option>
                            <option>Sort By: Latest Items</option>
                            <option>Sort By: Best Selling</option>
                            <option>Sort By: Best Rating</option>
                            <option>Sort By: Lowest Price</option>
                            <option>Sort By: Highest Price</option>
                          </select></div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="shop-p__collection">
                  <div className="row is-grid-active">
                  {products.map((x)=>(



<div className="col-lg-4 col-md-6 col-sm-6">
<div className="product-m">
    <div className="product-m__thumb">
    <Link to={`/myproduct?id=${x._id}`} className="aspect aspect--bg-grey aspect--square u-d-block" >
    <img className="aspect__img" src={x.image}/>
    </Link> 
      
      <div className="product-m__quick-look">
        <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
      <div className="product-m__add-cart">
        <a className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div>
    </div>
    <div className="product-m__content">
      <div className="product-m__category">
        <a href="shop-side-version-2.html">{x.dealType}</a></div>
      <div className="product-m__name">
      <Link to={`/myproduct?id=${x._id}`} >{x.name}</Link></div>
      <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-" /><i className="far fa-star" /><i className="far fa-star" />
        <span className="product-m__review">(23)</span></div>
      <div className="product-m__price">{x.price}</div>
      <div className="product-m__hover">
        <div className="product-m__preview-description">
          <span>{x.description}</span></div>
        <div className="product-m__wishlist">
          <div  onClick={() => Addwishlist(x._id)} className="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" /></div>
      </div>
    </div>
  </div>
</div>



                  ))}
               
                      
                   
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
    {/*====== End - Modal Section ======*/}
  </div>
  {/*====== End - Main App ======*/}
  {/*====== Google Analytics: change UA-XXXXX-Y to be your site's ID ======*/}
</div>
</div>
</Fragment>
      )}
    </Fragment>
  );
};


ListProduct.propTypes = {
    product: PropTypes.object.isRequired,
    GetProducts: PropTypes.func.isRequired,

  };
  
  const mapStateToProps = (state) => ({
    product: state.product,
  });

export default connect(mapStateToProps, {GetProducts,Addwishlist})(ListProduct);

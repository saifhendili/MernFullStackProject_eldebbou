import React, { Fragment,useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Aside from '../Admin/Layout/Aside';
import { getsearch, GetSearchProduct } from '../../actions/profile';


function Navbar({getsearch,GetSearchProduct, auth: { isAuthenticated, loading, user },panier:{panier}, logout }) {
  const [search, setSearch] = useState('');

  const loggout = (e) => {
    e.preventDefault();
    logout();
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
 


  const authLinks = (
    <div>

<header className="header--style-1">
      <nav className="primary-nav primary-nav-wrapper--border">
        <div className="container">
          <div className="primary-nav">
            <Link className="main-logo" to='dashboard'>
              <img src="assetes/images/logo/logo-1.png"  /></Link>
            {/* <form className="main-form">
              <label htmlFor="main-search" />
              <input  type='text' className="input-text input-text--border-radius input-text--style-1"    onChange={(e) => handleChange(e)} id="main-search" placeholder="Search" />
              <div className='perso_nav_dim'>
              <Link className='Search-nav ' to='profiles'>  <button className="btn btn--icon fas fa-search main-search-button"  type="submit" >Product</button></Link>
              <Link className='Search-nav perso_nav_dim' to='profiles'> <button className="btn btn--icon fas fa-search main-search-button"  type="submit" >User</button></Link>
              </div>
              </form> */}
                  <form class="form-inline my-2 my-lg-0">
  
      <input class="form-control mr-sm-2" type="search"  onChange={(e) => handleChange(e)} placeholder="Search" aria-label="Search"/>
      <Link className='Search-nav ' to='profiles'><button onClick={() => getsearch(search)}  class="btn btn-outline-warning my-2 my-sm-0" type="submit">User</button></Link> 
      <Link className='Search-nav ' to='product_searched'><button onClick={() =>GetSearchProduct(search)}   class="btn btn-outline-warning my-2 my-sm-0" type="submit">Product</button></Link> 


    </form>
            {/*====== End - Search Form ======*/}
            {/*====== Dropdown Main plugin ======*/}
            <div className="menu-init" id="navigation">
              <button className="btn btn--icon toggle-button toggle-button--secondary fas fa-cogs" type="button" />
              {/*====== Menu ======*/}
              <div className="ah-lg-mode">
                <span className="ah-close">✕ Close</span>
                {/*====== List ======*/}
                <ul className="ah-list ah-list--design1 ah-list--link-color-secondary">
                  <li className="has-dropdown" data-tooltip="tooltip" data-placement="left" title="Account">
                    <a><i className="far fa-user-circle" /></a>
                    {/*====== Dropdown ======*/}
                    <span className="js-menu-toggle" />
                    <ul style={{width: 120}}>
                    <li>
                        <Link to="myprofile"><i className="fas fa-user-circle u-s-m-r-6" />
                          <span>Account</span></Link></li>
                      <li>
                        <Link to="profile"><i className="fas fa-user-circle u-s-m-r-6" />
                          <span>Update Info</span></Link></li>
                         
                     
                      <li>
                        <a onClick={(e) => loggout(e)} ><i className="fas fa-lock-open u-s-m-r-6" />
                          <span>Signout</span></a></li>
                    </ul>
                    {/*====== End - Dropdown ======*/}
                  </li>
                
                  <li data-tooltip="tooltip" data-placement="left" title="Contact">
                    <a href="tel:+0900901904"><i className="fas fa-phone-volume" /></a></li>
                  <li data-tooltip="tooltip" data-placement="left" title="Mail">
                    <a href="mailto:artweb@gmail.com"><i className="far fa-envelope" /></a></li>
                </ul>
                {/*====== End - List ======*/}
              </div>
              {/*====== End - Menu ======*/}
            </div>
            {/*====== End - Dropdown Main plugin ======*/}
          </div>
          {/*====== End - Primary Nav ======*/}
        </div>
      </nav>
      {/*====== End - Nav 1 ======*/}
      {/*====== Nav 2 ======*/}
      <nav className="secondary-nav-wrapper">
        <div className="container">
          {/*====== Secondary Nav ======*/}
          <div className="secondary-nav">
            {/*====== Dropdown Main plugin ======*/}
            <div className="menu-init" id="navigation1">
              {/*====== Menu ======*/}
              <div className="ah-lg-mode">
                <span className="ah-close">✕ Close</span>
                {/*====== List ======*/}
                <ul className="ah-list">
                  <li className="has-dropdown">
                    <span className="mega-text">M</span>
                    {/*====== Mega Menu ======*/}
                    <span className="js-menu-toggle" />
                    <div className="mega-menu">
                      <div className="mega-menu-wrap">
                        <div className="mega-menu-list">
                          <ul>
                            <li className="js-active">
                              <a href="shop-side-version-2.html"><i className="fas fa-tv u-s-m-r-6" />
                                <span>Electronics</span></a>
                              <span className="js-menu-toggle js-toggle-mark" /></li>
                            <li>
                              <a href="shop-side-version-2.html"><i className="fas fa-female u-s-m-r-6" />
                                <span>Women's Clothing</span></a>
                              <span className="js-menu-toggle" /></li>
                            <li>
                              <a href="shop-side-version-2.html"><i className="fas fa-male u-s-m-r-6" />
                                <span>Men's Clothing</span></a>
                              <span className="js-menu-toggle" /></li>
                            <li>
                              <a href="index.html"><i className="fas fa-utensils u-s-m-r-6" />
                                <span>Food &amp; Supplies</span></a>
                              <span className="js-menu-toggle" /></li>
                            <li>
                              <a href="index.html"><i className="fas fa-couch u-s-m-r-6" />
                                <span>Furniture &amp; Decor</span></a>
                              <span className="js-menu-toggle" /></li>
                            <li>
                              <a href="index.html"><i className="fas fa-football-ball u-s-m-r-6" />
                                <span>Sports &amp; Game</span></a>
                              <span className="js-menu-toggle" /></li>
                            <li>
                              <a href="index.html"><i className="fas fa-heartbeat u-s-m-r-6" />
                                <span>Beauty &amp; Heh</span></a>
                              <span className="js-menu-toggle" /></li>
                          </ul>
                        </div>
                        {/*====== Electronics ======*/}
                        <div className="mega-menu-content js-active">
                          {/*====== Mega Menu Row ======*/}
                          <div className="row">
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">3D PRINTER &amp; SUPPLIES</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">3d Printer</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">3d Printing Pen</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">3d Printing Accessories</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">3d Printer Module Board</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">HOME AUDIO &amp; VIDEO</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">TV Boxes</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">TC Receiver &amp; Accessories</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Display Dongle</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Home Theater System</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">MEDIA PLAYERS</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Earphones</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Mp3 Players</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Speakers &amp; Radios</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Microphones</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">VIDEO GAME ACCESSORIES</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Nintendo Video Games Accessories</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Sony Video Games Accessories</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Xbox Video Games Accessories</a></li>
                              </ul>
                            </div>
                          </div>
                          {/*====== End - Mega Menu Row ======*/}
                          <br />
                          {/*====== Mega Menu Row ======*/}
                          <div className="row">
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">SECURITY &amp; PROTECTION</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Security Cameras</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Alarm System</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Security Gadgets</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">CCTV Security &amp; Accessories</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">PHOTOGRAPHY &amp; CAMERA</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Digital Cameras</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Sport Camera &amp; Accessories</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Camera Accessories</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Lenses &amp; Accessories</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">ARDUINO COMPATIBLE</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Raspberry Pi &amp; Orange Pi</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Module Board</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Smart Robot</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Board Kits</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">DSLR Camera</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Nikon Cameras</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Canon Camera</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Sony Camera</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">DSLR Lenses</a></li>
                              </ul>
                            </div>
                          </div>
                          {/*====== End - Mega Menu Row ======*/}
                          <br />
                          {/*====== Mega Menu Row ======*/}
                          <div className="row">
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">NECESSARY ACCESSORIES</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Flash Cards</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Memory Cards</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Flash Pins</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Compact Discs</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-9 mega-image">
                              <div className="mega-banner">
                                <a className="u-d-block" href="shop-side-version-2.html">
                                  <img className="u-img-fluid u-d-block" src="assetes/images/banners/banner-mega-0.jpg"  /></a></div>
                            </div>
                          </div>
                          {/*====== End - Mega Menu Row ======*/}
                        </div>
                        {/*====== End - Electronics ======*/}
                        {/*====== Women ======*/}
                        <div className="mega-menu-content">
                          {/*====== Mega Menu Row ======*/}
                          <div className="row">
                            <div className="col-lg-6 mega-image">
                              <div className="mega-banner">
                                <a className="u-d-block" href="shop-side-version-2.html">
                                  <img className="u-img-fluid u-d-block" src="assetes/images/banners/banner-mega-1.jpg"  /></a></div>
                            </div>
                            <div className="col-lg-6 mega-image">
                              <div className="mega-banner">
                                <a className="u-d-block" href="shop-side-version-2.html">
                                  <img className="u-img-fluid u-d-block" src="assetes/images/banners/banner-mega-2.jpg"  /></a></div>
                            </div>
                          </div>
                          {/*====== End - Mega Menu Row ======*/}
                          <br />
                          {/*====== Mega Menu Row ======*/}
                          <div className="row">
                           
                   
                        
                          </div>
                          {/*====== End - Mega Menu Row ======*/}
                          <br />
                          {/*====== Mega Menu Row ======*/}
                      
                          {/*====== End - Mega Menu Row ======*/}
                          <br />
                          {/*====== Mega Menu Row ======*/}
                          <div className="row">
                            <div className="col-lg-9 mega-image">
                              <div className="mega-banner">
                                <a className="u-d-block" href="shop-side-version-2.html">
                                  <img className="u-img-fluid u-d-block" src="assetes/images/banners/banner-mega-3.jpg"  /></a></div>
                            </div>
                            <div className="col-lg-3 mega-image">
                              <div className="mega-banner">
                                <a className="u-d-block" href="shop-side-version-2.html">
                                  <img className="u-img-fluid u-d-block" src="assetes/images/banners/banner-mega-4.jpg"  /></a></div>
                            </div>
                          </div>
                          {/*====== End - Mega Menu Row ======*/}
                        </div>
                        {/*====== End - Women ======*/}
                        {/*====== Men ======*/}
                        <div className="mega-menu-content">
                          {/*====== Mega Menu Row ======*/}
                          <div className="row">
                            <div className="col-lg-4 mega-image">
                              <div className="mega-banner">
                                <a className="u-d-block" href="shop-side-version-2.html">
                                  <img className="u-img-fluid u-d-block" src="assetes/images/banners/banner-mega-5.jpg"  /></a></div>
                            </div>
                            <div className="col-lg-4 mega-image">
                              <div className="mega-banner">
                                <a className="u-d-block" href="shop-side-version-2.html">
                                  <img className="u-img-fluid u-d-block" src="assetes/images/banners/banner-mega-6.jpg"  /></a></div>
                            </div>
                            <div className="col-lg-4 mega-image">
                              <div className="mega-banner">
                                <a className="u-d-block" href="shop-side-version-2.html">
                                  <img className="u-img-fluid u-d-block" src="assetes/images/banners/banner-mega-7.jpg"  /></a></div>
                            </div>
                          </div>
                          {/*====== End - Mega Menu Row ======*/}
                          <br />
                          {/*====== Mega Menu Row ======*/}
                          <div className="row">
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">HOT SALE</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">T-Shirts</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Tank Tops</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Polo</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Shirts</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">OUTWEAR</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Hoodies</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Trench</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Parkas</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Sweaters</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">BOTTOMS</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Casual Pants</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Cargo Pants</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Jeans</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Shorts</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">UNDERWEAR</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Boxers</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Briefs</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Robes</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Socks</a></li>
                              </ul>
                            </div>
                          </div>
                          {/*====== End - Mega Menu Row ======*/}
                          <br />
                          {/*====== Mega Menu Row ======*/}
                          <div className="row">
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">JACKETS</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Denim Jackets</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Trucker Jackets</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Windbreaker Jackets</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Leather Jackets</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">SUNGLASSES</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Pilot</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Wayfarer</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Square</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Round</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">ACCESSORIES</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Eyewear Frames</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Scarves</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Hats</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Belts</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <ul>
                                <li className="mega-list-title">
                                  <a href="shop-side-version-2.html">OTHER ACCESSORIES</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Bags</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Wallets</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Watches</a></li>
                                <li>
                                  <a href="shop-side-version-2.html">Tech Accessories</a></li>
                              </ul>
                            </div>
                          </div>
                          {/*====== End - Mega Menu Row ======*/}
                          <br />
                          {/*====== Mega Menu Row ======*/}
                          <div className="row">
                            <div className="col-lg-6 mega-image">
                              <div className="mega-banner">
                                <a className="u-d-block" href="shop-side-version-2.html">
                                  <img className="u-img-fluid u-d-block" src="assetes/images/banners/banner-mega-8.jpg"  /></a></div>
                            </div>
                            <div className="col-lg-6 mega-image">
                              <div className="mega-banner">
                                <a className="u-d-block" href="shop-side-version-2.html">
                                  <img className="u-img-fluid u-d-block" src="assetes/images/banners/banner-mega-9.jpg"  /></a></div>
                            </div>
                          </div>
                          {/*====== End - Mega Menu Row ======*/}
                        </div>
                        {/*====== End - Men ======*/}
                        {/*====== No Sub Categories ======*/}
                        <div className="mega-menu-content">
                          <h5>No Categories</h5>
                        </div>
                        {/*====== End - No Sub Categories ======*/}
                        {/*====== No Sub Categories ======*/}
                        <div className="mega-menu-content">
                          <h5>No Categories</h5>
                        </div>
                        {/*====== End - No Sub Categories ======*/}
                        {/*====== No Sub Categories ======*/}
                        <div className="mega-menu-content">
                          <h5>No Categories</h5>
                        </div>
                        {/*====== End - No Sub Categories ======*/}
                        {/*====== No Sub Categories ======*/}
                        <div className="mega-menu-content">
                          <h5>No Categories</h5>
                        </div>
                        {/*====== End - No Sub Categories ======*/}
                      </div>
                    </div>
                    {/*====== End - Mega Menu ======*/}
                  </li>
                </ul>
                {/*====== End - List ======*/}
              </div>
              {/*====== End - Menu ======*/}
            </div>
            {/*====== End - Dropdown Main plugin ======*/}
            {/*====== Dropdown Main plugin ======*/}
            <div className="menu-init" id="navigation2">
              <button className="btn btn--icon toggle-button toggle-button--secondary fas fa-cog" type="button" />
              {/*====== Menu ======*/}
              <div className="ah-lg-mode">
                <span className="ah-close">✕ Close</span>
                {/*====== List ======*/}
                <ul className="ah-list ah-list--design2 ah-list--link-color-secondary">
                  <li className="shop-side-version-2.html"><Link to="/recommanded-system">

                    
                   Recommanded System
                    </Link>
                    </li>
                    
                    <li>
                        <Link to="/addproduct">Add Product </Link></li>
                  <li>
                  <Link to ="messenger" >Messenger</Link>
                   </li>
                  <li>
                    <Link to ="exchange-product" >My Exchange Products</Link></li>
                </ul>
                {/*====== End - List ======*/}
              </div>
              {/*====== End - Menu ======*/}
            </div>
            {/*====== End - Dropdown Main plugin ======*/}
            {/*====== Dropdown Main plugin ======*/}
            <div className="menu-init" id="navigation3">
              <button className="btn btn--icon toggle-button toggle-button--secondary fas fa-shopping-bag toggle-button-shop" type="button" />
              <span className="total-item-round">2</span>
              {/*====== Menu ======*/}
              <div className="ah-lg-mode">
                <span className="ah-close">✕ Close</span>
                {/*====== List ======*/}
                <ul className="ah-list ah-list--design1 ah-list--link-color-secondary">
                  <li>
                    <a href="index.html"><i className="fas fa-home u-c-brand" /></a></li>
                  <li>
                  <Link to="wishlist">
<i className="far fa-heart" /></Link></li>
                  <li className="has-dropdown">
                    <Link to="card" className="mini-cart-shop-link"><i className="fas fa-shopping-bag" />
                    {panier.length==0?null: <span className="total-item-round">{panier.length}</span>}
                     </Link>
                    {/*====== Dropdown ======*/}
                    <span className="js-menu-toggle" />
                   
                    {/*====== End - Dropdown ======*/}
                  </li>
                </ul>
                {/*====== End - List ======*/}
              </div>
              {/*====== End - Menu ======*/}
            </div>
            {/*====== End - Dropdown Main plugin ======*/}
          </div>
          {/*====== End - Secondary Nav ======*/}
        </div>
      </nav>
      {/*====== End - Nav 2 ======*/}
    </header>

        
    </div>
      
  );

  const guestLinks = (
    <div>

    <header className="header--style-1">
          <nav className="primary-nav primary-nav-wrapper--border">
            <div className="container">
              <div className="primary-nav">
              <Link to="" className="main-logo ">
                  <img src="assetes/images/logo/logo-1.png"  /></Link>
              
               
                {/*====== End - Search Form ======*/}
                {/*====== Dropdown Main plugin ======*/}
                <div className="menu-init" id="navigation">
                  <button className="btn btn--icon toggle-button toggle-button--secondary fas fa-cogs" type="button" />
                  {/*====== Menu ======*/}
                  <div className="ah-lg-mode">
                    <span className="ah-close">✕ Close</span>
                    {/*====== List ======*/}
                    <ul className="ah-list ah-list--design1 ah-list--link-color-secondary">
                      <li className="has-dropdown" data-tooltip="tooltip" data-placement="left" title="Account">
                        <a><i className="far fa-user-circle" /></a>
                        {/*====== Dropdown ======*/}
                        <span className="js-menu-toggle" />
                        <ul style={{width: 120}}>
                    
                          <li>
                            <Link to="register"><i className="fas fa-user-plus u-s-m-r-6" />
                              <span>Sign up</span></Link></li>
                          <li>
                            <Link to="login"><i className="fas fa-lock u-s-m-r-6" />
                              <span>Signin</span></Link></li>
                        
                            
                        </ul>
                        {/*====== End - Dropdown ======*/}
                      </li>
                     
                      <li data-tooltip="tooltip" data-placement="left" title="Contact">
                        <a href="tel:+25609526"><i className="fas fa-phone-volume" /></a></li>
                      {/* <li data-tooltip="tooltip" data-placement="left" title="Mail">
                        <a href="mailto:"><i className="far fa-envelope" /></a></li> */}
                    </ul>
                    {/*====== End - List ======*/}
                  </div>
                  {/*====== End - Menu ======*/}
                </div>
                {/*====== End - Dropdown Main plugin ======*/}
              </div>
              {/*====== End - Primary Nav ======*/}
            </div>
          </nav>
          {/*====== End - Nav 1 ======*/}
          {/*====== Nav 2 ======*/}
         
          {/*====== End - Nav 2 ======*/}
        </header>
    
            
        </div>
  );




















  const requestLink = (
    <div>

    <header className="header--style-1">
          <nav className="primary-nav primary-nav-wrapper--border">
            <div className="container">
              <div className="primary-nav">
                <a className="main-logo" href="index.html">
                  <img src="assetes/images/logo/logo-1.png"  /></a>
                  <h6>
                        <a onClick={(e) => loggout(e)} ><i className="fas fa-lock-open u-s-m-r-6" />
                          <span>Signout</span></a></h6>
               
                {/*====== End - Search Form ======*/}
            
                {/*====== End - Dropdown Main plugin ======*/}
              </div>
              {/*====== End - Primary Nav ======*/}
            </div>
          </nav>
          {/*====== End - Nav 1 ======*/}
          {/*====== Nav 2 ======*/}
          <nav className="secondary-nav-wrapper">
            <div className="container">
              {/*====== Secondary Nav ======*/}
            
              {/*====== End - Secondary Nav ======*/}
            </div>
          </nav>
          {/*====== End - Nav 2 ======*/}
        </header>
    
            
        </div>
  );



  const DeliveryLink = (
    <div>

    <header className="header--style-1">
          <nav className="primary-nav primary-nav-wrapper--border">
            <div className="container">
              <div className="primary-nav">
                <Link to="dashboard" className="main-logo">
                  <img src="assetes/images/logo/logo-1.png"  /></Link>
                  <Link to="pricing">  <h6> <span>Get Premieum account</span></h6></Link>
                  <Link to ="messenger" >Messenger</Link>

                  <Link to="myorders-delivery">  <h6> <span>MyOrders</span></h6></Link>
                  <h6>
                   
                        <a onClick={(e) => loggout(e)} ><i className="fas fa-lock-open u-s-m-r-6" />
                          <span>Signout</span></a></h6>
               
                {/*====== End - Search Form ======*/}
            
                {/*====== End - Dropdown Main plugin ======*/}
              </div>
              {/*====== End - Primary Nav ======*/}
            </div>
          </nav>
          {/*====== End - Nav 1 ======*/}
          {/*====== Nav 2 ======*/}
          <nav className="secondary-nav-wrapper">
            <div className="container">
              {/*====== Secondary Nav ======*/}
            
              {/*====== End - Secondary Nav ======*/}
            </div>
          </nav>
          {/*====== End - Nav 2 ======*/}
        </header>
    
            
        </div>
  );

  const OrganisationLink = (
    <div>

    <header className="header--style-1">
          <nav className="primary-nav primary-nav-wrapper--border">
            <div className="container">
              <div className="primary-nav">
                <Link to="dashboard" className="main-logo">
                  <img src="assetes/images/logo/logo-1.png"  /></Link>
                  <Link to="pricing">  <h6> <span>My Order</span></h6></Link>
                  <Link to ="messenger" >Messenger</Link>

                  <Link to="">  <h6> <span>My Orders</span></h6></Link>
                  <h6>
                   
                        <a onClick={(e) => loggout(e)} ><i className="fas fa-lock-open u-s-m-r-6" />
                          <span>Signout</span></a></h6>
               
                {/*====== End - Search Form ======*/}
            
                {/*====== End - Dropdown Main plugin ======*/}
              </div>
              {/*====== End - Primary Nav ======*/}
            </div>
          </nav>
          {/*====== End - Nav 1 ======*/}
          {/*====== Nav 2 ======*/}
          <nav className="secondary-nav-wrapper">
            <div className="container">
              {/*====== Secondary Nav ======*/}
            
              {/*====== End - Secondary Nav ======*/}
            </div>
          </nav>
          {/*====== End - Nav 2 ======*/}
        </header>
    
            
        </div>
  );
  const adminLinks = (

    <div>
      <Aside />
        <header class="app-header top-bar">
    
    <nav class="navbar navbar-expand-md">

    
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="ti ti-align-left"></i>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navigation d-flex">
                <ul class="navbar-nav nav-left">
                    <li class="nav-item">
                        <a href="javascript:void(0)" class="nav-link sidebar-toggle">
                            <i class="ti ti-align-right"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  " href="javascript:void(0)" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mega Menu
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <div class="dropdown-menu mega-menu animated fadeIn" aria-labelledby="navbarDropdown">
                            <div class="row no-gutters">
                                <div class="col-sm-2 p-20">
                                    <h4>UI Kit</h4>
                                    <ul>
                                        <li class="nav-link">
                                            <a href="ui-alerts.html">Alerts</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="ui-button.html">Buttons</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="ui-cards.html">Cards</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="ui-carousel.html">Carousel</a>
                                        </li>

                                        <li class="nav-link">
                                            <a href="ui-dropdowns.html">Dropdowns</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="ui-list-group.html">List Group</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="ui-modals.html">Modals</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="ui-progressbars.html">Progress Bars</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="ui-tabs.html">Tabs</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-sm-2 p-20">
                                    <h4>Pages</h4>
                                    <ul>
                                        <li class="nav-link">
                                            <a href="page-account-settings.html">Account Settings</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="page-clients.html">Clients</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="page-contacts.html">Contacts</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="page-gallery.html">Gallery</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="page-pricing.html">Pricing</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="page-task-list.html">Task List</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="page-404.html">404</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="page-500.html">500</a>
                                        </li>
                                        <li class="nav-link">
                                            <a href="page-coming-soon.html">Coming Soon</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-sm-4 p-20">
                                    <h4>Contact Us</h4>
                                    <div>
                                        <form>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="Password1" placeholder="Enter Name"/>
                                            </div>
                                            <div class="form-group">
                                                <input type="email" class="form-control" id="Email1" placeholder="Enter Email"/>
                                            </div>
                                            <div class="form-group">
                                                <textarea class="form-control" placeholder="Message" id="Textarea1" rows="3"></textarea>
                                            </div>
                                            <button type="submit" class="btn btn-primary text-uppercase">Submit</button>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="chart-wrap">
                                        <div class="p-20">
                                            <h4 class="mb-1">Page Views</h4>
                                            <p>Daily page visitors</p>
                                            <h2 class="text-primary font-xxl mt-2">80+</h2>
                                        </div>
                                        <div class="apexchart-wrapper">
                                            <div id="pageview"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="javascript:void(0)" class="nav-link " id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Drop Down
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <div class="dropdown-menu animated fadeIn" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item nav-link" href="javascript:void(0)">Action</a>
                            <a class="dropdown-item nav-link" href="javascript:void(0)">Another action</a>
                            <a class="dropdown-item nav-link" href="javascript:void(0)">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item full-screen d-none d-lg-block" id="btnFullscreen">
                        <a href="javascript:void(0)" class="nav-link expand">
                            <i class="icon-size-fullscreen"></i>
                        </a>
                    </li>
                </ul>
                <ul class="navbar-nav nav-right ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="ti ti-email"></i>
                        </a>
                        <div class="dropdown-menu extended animated fadeIn" aria-labelledby="navbarDropdown">
                            <ul>
                                <li class="dropdown-header bg-gradient p-4 text-white text-left">Messages
                                    <label class="label label-info label-round">6</label>
                                    <a href="#" class="float-right btn btn-square btn-inverse-light btn-xs m-0">
                                        <span class="font-13"> Mark all as read</span></a>
                                </li>
                                <li class="dropdown-body">
                                    <ul class="scrollbar scroll_dark max-h-240">
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div class="notification d-flex flex-row align-items-center">
                                                    <div class="notify-icon bg-img align-self-center">
                                                        <img class="img-fluid" src="assets/img/avtar/03.jpg" alt="user3"/>
                                                    </div>
                                                    <div class="notify-message">
                                                        <p class="font-weight-bold">Brianing Leyon</p>
                                                        <small>You will sail along until you...</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div class="notification d-flex flex-row align-items-center">
                                                    <div class="notify-icon bg-img align-self-center">
                                                        <img class="img-fluid" src="assets/img/avtar/01.jpg" alt="user"/>
                                                    </div>
                                                    <div class="notify-message">
                                                        <p class="font-weight-bold">Jimmyimg Leyon</p>
                                                        <small>Okay</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div class="notification d-flex flex-row align-items-center">
                                                    <div class="notify-icon bg-img align-self-center">
                                                        <img class="img-fluid" src="assets/img/avtar/02.jpg" alt="user2"/>
                                                    </div>
                                                    <div class="notify-message">
                                                        <p class="font-weight-bold">Brainjon Leyon</p>
                                                        <small>So, make the decision...</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div class="notification d-flex flex-row align-items-center">
                                                    <div class="notify-icon bg-img align-self-center">
                                                        <img class="img-fluid" src="assets/img/avtar/04.jpg" alt="user4"/>
                                                    </div>
                                                    <div class="notify-message">
                                                        <p class="font-weight-bold">Smithmin Leyon</p>
                                                        <small>Thanks</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div class="notification d-flex flex-row align-items-center">
                                                    <div class="notify-icon bg-img align-self-center">
                                                        <img class="img-fluid" src="assets/img/avtar/05.jpg" alt="user5"/>
                                                    </div>
                                                    <div class="notify-message">
                                                        <p class="font-weight-bold">Jennyns Leyon</p>
                                                        <small>How are you</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div class="notification d-flex flex-row align-items-center">
                                                    <div class="notify-icon bg-img align-self-center">
                                                        <img class="img-fluid" src="assets/img/avtar/06.jpg" alt="user6"/>
                                                    </div>
                                                    <div class="notify-message">
                                                        <p class="font-weight-bold">Demian Leyon</p>
                                                        <small>I like your themes</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown-footer">
                                    <a class="font-13" href="javascript:void(0)"> View All messages </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fe fe-bell"></i>
                            <span class="notify">
                                        <span class="blink"></span>
                            <span class="dot"></span>
                            </span>
                        </a>
                        <div class="dropdown-menu extended animated fadeIn" aria-labelledby="navbarDropdown">
                            <ul>
                                <li class="dropdown-header bg-gradient p-4 text-white text-left">Notifications
                                    <a href="#" class="float-right btn btn-square btn-inverse-light btn-xs m-0">
                                        <span class="font-13"> Clear all</span></a>
                                </li>
                                <li class="dropdown-body min-h-240 nicescroll">
                                    <ul class="scrollbar scroll_dark max-h-240">
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div class="notification d-flex flex-row align-items-center">
                                                    <div class="notify-icon bg-img align-self-center">
                                                        <div class="bg-type bg-type-md">
                                                            <span>HY</span>
                                                        </div>
                                                    </div>
                                                    <div class="notify-message">
                                                        <p class="font-weight-bold">New registered user</p>
                                                        <small>Just now</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div class="notification d-flex flex-row align-items-center">
                                                    <div class="notify-icon bg-img align-self-center">
                                                        <div class="bg-type bg-type-md bg-success">
                                                            <span>GM</span>
                                                        </div>
                                                    </div>
                                                    <div class="notify-message">
                                                        <p class="font-weight-bold">New invoice received</p>
                                                        <small>22 min</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div class="notification d-flex flex-row align-items-center">
                                                    <div class="notify-icon bg-img align-self-center">
                                                        <div class="bg-type bg-type-md bg-danger">
                                                            <span>FR</span>
                                                        </div>
                                                    </div>
                                                    <div class="notify-message">
                                                        <p class="font-weight-bold">Server error report</p>
                                                        <small>7 min</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div class="notification d-flex flex-row align-items-center">
                                                    <div class="notify-icon bg-img align-self-center">
                                                        <div class="bg-type bg-type-md bg-info">
                                                            <span>HT</span>
                                                        </div>
                                                    </div>
                                                    <div class="notify-message">
                                                        <p class="font-weight-bold">Database report</p>
                                                        <small>1 day</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div class="notification d-flex flex-row align-items-center">
                                                    <div class="notify-icon bg-img align-self-center">
                                                        <div class="bg-type bg-type-md">
                                                            <span>DE</span>
                                                        </div>
                                                    </div>
                                                    <div class="notify-message">
                                                        <p class="font-weight-bold">Order confirmation</p>
                                                        <small>2 day</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown-footer">
                                    <a class="font-13" href="javascript:void(0)"> View All Notifications
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link search" href="javascript:void(0)">
                            <i class="ti ti-search"></i>
                        </a>
                        <div class="search-wrapper">
                            <div class="close-btn">
                                <i class="ti ti-close"></i>
                            </div>
                            <div class="search-content">
                                <form>
                                    <div class="form-group">
                                        <i class="ti ti-search magnifier"></i>
                                        <input type="text" class="form-control autocomplete" placeholder="Search Here" id="autocomplete-ajax" autofocus="autofocus"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item dropdown user-profile">
                        <a href="javascript:void(0)" class="nav-link dropdown-toggle " id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="assets/img/avtar/02.jpg" alt="avtar-img"/>
                            <span class="bg-success user-status"></span>
                        </a>
                        <div class="dropdown-menu animated fadeIn mycolor" aria-labelledby="navbarDropdown">
                            <div class="bg-gradient px-4 py-3">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="mr-1">
                                        <h4 class="text-white mb-0">Alice Williams</h4>
                                        <small class="text-white">Henry@example.com</small>
                                    </div>
                                    <a onClick={(e) => loggout(e)} href="#" class="text-white font-20 tooltip-wrapper" data-toggle="tooltip" data-placement="top" title="" data-original-title="Logout"> <i
                                                    class="zmdi zmdi-power"></i></a>
                                </div>
                            </div>
                            <div class="p-4">
                                <a class="dropdown-item d-flex nav-link" href="javascript:void(0)">
                                    <i class="fa fa-user pr-2 text-success"></i> Profile</a>
                                <a class="dropdown-item d-flex nav-link" href="javascript:void(0)">
                                    <i class="fa fa-envelope pr-2 text-primary"></i> Inbox
                                    <span class="badge badge-primary ml-auto">6</span>
                                </a>
                                <a class="dropdown-item d-flex nav-link" href="javascript:void(0)">
                                    <i class=" ti ti-settings pr-2 text-info"></i> Settings
                                </a>
                                <a class="dropdown-item d-flex nav-link" href="javascript:void(0)">
                                    <i class="fa fa-compass pr-2 text-warning"></i> Need help?</a>
                                <div class="row mt-2">
                                    <div class="col">
                                        <a class="bg-light p-3 text-center d-block" href="#">
                                            <i class="fe fe-mail font-20 text-primary"></i>
                                            <span class="d-block font-13 mt-2">My messages</span>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a class="bg-light p-3 text-center d-block" href="#">
                                            <i class="fe fe-plus font-20 text-primary"></i>
                                            <span class="d-block font-13 mt-2">Compose new</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
       
    </nav>
</header>
     
          
    </div>
  );

  return (
    <div className=''>
      <Fragment>
        {loading
          ? null
          :isAuthenticated && user !== null && user.blocked ?requestLink
          : isAuthenticated && user !== null && user.Role == 'Admin'
          ? adminLinks
          : isAuthenticated && user !== null && user.Role == 'Client or Saller'
          ? authLinks
          :isAuthenticated && user !== null && user.status == false &&(user.Role == 'Delivery' ||user.Role == 'Organisation')
          ?requestLink
          :isAuthenticated && user !== null && user.Role == 'Delivery' && user.status == true
          ?DeliveryLink
          :isAuthenticated && user !== null && user.Role == 'Organisation' && user.status == true

          ?OrganisationLink
          
          : guestLinks}
          {/* DeliveryLink */}
      </Fragment>

      {/* <Fragment>
        {profile === null || loading
          ? null
          : isAuthenticated && profile.user.typeuser == 'isAdmin'
          ? adminLinks
          : isAuthenticated
          ? authLinks
          : guestLinks}
      </Fragment> */}
    </div>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,

  // logoutadmin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  panier: state.panier,

  // admin: state.admin,
});

export default connect(mapStateToProps, {
  logout,getsearch,GetSearchProduct
})(Navbar);

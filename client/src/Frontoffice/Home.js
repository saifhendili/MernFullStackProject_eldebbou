import React from 'react'

function Home() {
  return (
    <div>
    <div>
      <header className="header--style-1">
        {/*====== Nav 1 ======*/}
        <nav className="primary-nav primary-nav-wrapper--border">
          <div className="container">
            {/*====== Primary Nav ======*/}
            <div className="primary-nav">
              {/*====== Main Logo ======*/}
              <a className="main-logo" href="index.html">
                <img src="assetes/images/logo/logo-1.png"  /></a>
              {/*====== End - Main Logo ======*/}
              {/*====== Search Form ======*/}
              <form className="main-form">
                <label htmlFor="main-search" />
                <input className="input-text input-text--border-radius input-text--style-1" type="text" id="main-search" placeholder="Search" />
                <button className="btn btn--icon fas fa-search main-search-button" type="submit" /></form>
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
                          <a href="dashboard.html"><i className="fas fa-user-circle u-s-m-r-6" />
                            <span>Account</span></a></li>
                        <li>
                          <a href="signup.html"><i className="fas fa-user-plus u-s-m-r-6" />
                            <span>Signup</span></a></li>
                        <li>
                          <a href="signin.html"><i className="fas fa-lock u-s-m-r-6" />
                            <span>Signin</span></a></li>
                        <li>
                          <a href="signup.html"><i className="fas fa-lock-open u-s-m-r-6" />
                            <span>Signout</span></a></li>
                      </ul>
                      {/*====== End - Dropdown ======*/}
                    </li>
                    <li className="has-dropdown" data-tooltip="tooltip" data-placement="left" title="Settings">
                      <a><i className="fas fa-user-cog" /></a>
                      {/*====== Dropdown ======*/}
                      <span className="js-menu-toggle" />
                      <ul style={{width: 120}}>
                        <li className="has-dropdown has-dropdown--ul-right-100">
                          <a>Language<i className="fas fa-angle-down u-s-m-l-6" /></a>
                          {/*====== Dropdown ======*/}
                          <span className="js-menu-toggle" />
                          <ul style={{width: 120}}>
                            <li>
                              <a className="u-c-brand">ENGLISH</a></li>
                            <li>
                              <a>ARABIC</a></li>
                            <li>
                              <a>FRANCAIS</a></li>
                            <li>
                              <a>ESPANOL</a></li>
                          </ul>
                          {/*====== End - Dropdown ======*/}
                        </li>
                        <li className="has-dropdown has-dropdown--ul-right-100">
                          <a>Currency<i className="fas fa-angle-down u-s-m-l-6" /></a>
                          {/*====== Dropdown ======*/}
                          <span className="js-menu-toggle" />
                          <ul style={{width: 225}}>
                            <li>
                              <a className="u-c-brand">$ - US DOLLAR</a></li>
                            <li>
                              <a>£ - BRITISH POUND STERLING</a></li>
                            <li>
                              <a>€ - EURO</a></li>
                          </ul>
                          {/*====== End - Dropdown ======*/}
                        </li>
                      </ul>
                      {/*====== End - Dropdown ======*/}
                    </li>
                    <li data-tooltip="tooltip" data-placement="left" title="Contact">
                      <a href="tel:+0900901904"><i className="fas fa-phone-volume" /></a></li>
                    <li data-tooltip="tooltip" data-placement="left" title="Mail">
                      <a href="mailto:contact@domain.com"><i className="far fa-envelope" /></a></li>
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
                <button className="btn btn--icon toggle-mega-text toggle-button" type="button">M</button>
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
                              <div className="col-lg-3">
                                <ul>
                                  <li className="mega-list-title">
                                    <a href="shop-side-version-2.html">HOT CATEGORIES</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Dresses</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Blouses &amp; Shirts</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">T-shirts</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Rompers</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-3">
                                <ul>
                                  <li className="mega-list-title">
                                    <a href="shop-side-version-2.html">INTIMATES</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Bras</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Brief Sets</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Bustiers &amp; Corsets</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Panties</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-3">
                                <ul>
                                  <li className="mega-list-title">
                                    <a href="shop-side-version-2.html">WEDDING &amp; EVENTS</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Wedding Dresses</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Evening Dresses</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Prom Dresses</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Flower Dresses</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-3">
                                <ul>
                                  <li className="mega-list-title">
                                    <a href="shop-side-version-2.html">BOTTOMS</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Skirts</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Shorts</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Leggings</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Jeans</a></li>
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
                                    <a href="shop-side-version-2.html">OUTWEAR</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Blazers</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Basics Jackets</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Trench</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Leather &amp; Suede</a></li>
                                </ul>
                              </div>
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
                                    <a href="shop-side-version-2.html">ACCESSORIES</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Tech Accessories</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Headwear</a></li>
                                  <li>
                                    <a href="shop-side-version-2.html">Baseball Caps</a></li>
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
                                    <a href="shop-side-version-2.html">Sunglasses</a></li>
                                </ul>
                              </div>
                            </div>
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
                    <li>
                      <a href="shop-side-version-2.html">NEW ARRIVALS</a></li>
                    <li className="has-dropdown">
                      <a>PAGES<i className="fas fa-angle-down u-s-m-l-6" /></a>
                      {/*====== Dropdown ======*/}
                      <span className="js-menu-toggle" />
                      <ul style={{width: 170}}>
                        <li className="has-dropdown has-dropdown--ul-left-100">
                          <a>Home<i className="fas fa-angle-down i-state-right u-s-m-l-6" /></a>
                          {/*====== Dropdown ======*/}
                          <span className="js-menu-toggle" />
                          <ul style={{width: 118}}>
                            <li>
                              <a href="index.html">Home 1</a></li>
                            <li>
                              <a href="index-2.html">Home 2</a></li>
                            <li>
                              <a href="index-3.html">Home 3</a></li>
                          </ul>
                          {/*====== End - Dropdown ======*/}
                        </li>
                        <li className="has-dropdown has-dropdown--ul-left-100">
                          <a>Account<i className="fas fa-angle-down i-state-right u-s-m-l-6" /></a>
                          {/*====== Dropdown ======*/}
                          <span className="js-menu-toggle" />
                          <ul style={{width: 200}}>
                            <li>
                              <a href="signin.html">Signin / Already Registered</a></li>
                            <li>
                              <a href="signup.html">Signup / Register</a></li>
                            <li>
                              <a href="lost-password.html">Lost Password</a></li>
                          </ul>
                          {/*====== End - Dropdown ======*/}
                        </li>
                        <li className="has-dropdown has-dropdown--ul-left-100">
                          <a href="dashboard.html">Dashboard<i className="fas fa-angle-down i-state-right u-s-m-l-6" /></a>
                          {/*====== Dropdown ======*/}
                          <span className="js-menu-toggle" />
                          <ul style={{width: 200}}>
                            <li className="has-dropdown has-dropdown--ul-left-100">
                              <a href="dashboard.html">Manage My Account<i className="fas fa-angle-down i-state-right u-s-m-l-6" /></a>
                              {/*====== Dropdown ======*/}
                              <span className="js-menu-toggle" />
                              <ul style={{width: 180}}>
                                <li>
                                  <a href="dash-edit-profile.html">Edit Profile</a></li>
                                <li>
                                  <a href="dash-address-book.html">Edit Address Book</a></li>
                                <li>
                                  <a href="dash-manage-order.html">Manage Order</a></li>
                              </ul>
                              {/*====== End - Dropdown ======*/}
                            </li>
                            <li>
                              <a href="dash-my-profile.html">My Profile</a></li>
                            <li className="has-dropdown has-dropdown--ul-left-100">
                              <a href="dash-address-book.html">Address Book<i className="fas fa-angle-down i-state-right u-s-m-l-6" /></a>
                              {/*====== Dropdown ======*/}
                              <span className="js-menu-toggle" />
                              <ul style={{width: 180}}>
                                <li>
                                  <a href="dash-address-make-default.html">Address Make Default</a></li>
                                <li>
                                  <a href="dash-address-add.html">Add New Address</a></li>
                                <li>
                                  <a href="dash-address-edit.html">Edit Address Book</a></li>
                              </ul>
                              {/*====== End - Dropdown ======*/}
                            </li>
                            <li>
                              <a href="dash-track-order.html">Track Order</a></li>
                            <li>
                              <a href="dash-my-order.html">My Orders</a></li>
                            <li>
                              <a href="dash-payment-option.html">My Payment Options</a></li>
                            <li>
                              <a href="dash-cancellation.html">My Returns &amp; Cancellations</a></li>
                          </ul>
                          {/*====== End - Dropdown ======*/}
                        </li>
                        <li className="has-dropdown has-dropdown--ul-left-100">
                          <a>Empty<i className="fas fa-angle-down i-state-right u-s-m-l-6" /></a>
                          {/*====== Dropdown ======*/}
                          <span className="js-menu-toggle" />
                          <ul style={{width: 200}}>
                            <li>
                              <a href="empty-search.html">Empty Search</a></li>
                            <li>
                              <a href="empty-cart.html">Empty Cart</a></li>
                            <li>
                              <a href="empty-wishlist.html">Empty Wishlist</a></li>
                          </ul>
                          {/*====== End - Dropdown ======*/}
                        </li>
                        <li className="has-dropdown has-dropdown--ul-left-100">
                          <a>Product Details<i className="fas fa-angle-down i-state-right u-s-m-l-6" /></a>
                          {/*====== Dropdown ======*/}
                          <span className="js-menu-toggle" />
                          <ul style={{width: 200}}>
                            <li>
                              <a href="product-detail.html">Product Details</a></li>
                            <li>
                              <a href="product-detail-variable.html">Product Details Variable</a></li>
                            <li>
                              <a href="product-detail-affiliate.html">Product Details Affiliate</a></li>
                          </ul>
                          {/*====== End - Dropdown ======*/}
                        </li>
                        <li className="has-dropdown has-dropdown--ul-left-100">
                          <a>Shop Grid Layout<i className="fas fa-angle-down i-state-right u-s-m-l-6" /></a>
                          {/*====== Dropdown ======*/}
                          <span className="js-menu-toggle" />
                          <ul style={{width: 200}}>
                            <li>
                              <a href="shop-grid-left.html">Shop Grid Left Sidebar</a></li>
                            <li>
                              <a href="shop-grid-right.html">Shop Grid Right Sidebar</a></li>
                            <li>
                              <a href="shop-grid-full.html">Shop Grid Full Width</a></li>
                            <li>
                              <a href="shop-side-version-2.html">Shop Side Version 2</a></li>
                          </ul>
                          {/*====== End - Dropdown ======*/}
                        </li>
                        <li className="has-dropdown has-dropdown--ul-left-100">
                          <a>Shop List Layout<i className="fas fa-angle-down i-state-right u-s-m-l-6" /></a>
                          {/*====== Dropdown ======*/}
                          <span className="js-menu-toggle" />
                          <ul style={{width: 200}}>
                            <li>
                              <a href="shop-list-left.html">Shop List Left Sidebar</a></li>
                            <li>
                              <a href="shop-list-right.html">Shop List Right Sidebar</a></li>
                            <li>
                              <a href="shop-list-full.html">Shop List Full Width</a></li>
                          </ul>
                          {/*====== End - Dropdown ======*/}
                        </li>
                        <li>
                          <a href="cart.html">Cart</a></li>
                        <li>
                          <a href="wishlist.html">Wishlist</a></li>
                        <li>
                          <a href="checkout.html">Checkout</a></li>
                        <li>
                          <a href="faq.html">FAQ</a></li>
                        <li>
                          <a href="about.html">About us</a></li>
                        <li>
                          <a href="contact.html">Contact</a></li>
                        <li>
                          <a href="404.html">404</a></li>
                      </ul>
                      {/*====== End - Dropdown ======*/}
                    </li>
                    <li className="has-dropdown">
                      <a>BLOG<i className="fas fa-angle-down u-s-m-l-6" /></a>
                      {/*====== Dropdown ======*/}
                      <span className="js-menu-toggle" />
                      <ul style={{width: 200}}>
                        <li>
                          <a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                        <li>
                          <a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                        <li>
                          <a href="blog-sidebar-none.html">Blog Sidebar None</a></li>
                        <li>
                          <a href="blog-masonry.html">Blog Masonry</a></li>
                        <li>
                          <a href="blog-detail.html">Blog Details</a></li>
                      </ul>
                      {/*====== End - Dropdown ======*/}
                    </li>
                    <li>
                      <a href="shop-side-version-2.html">VALUE OF THE DAY</a></li>
                    <li>
                      <a href="shop-side-version-2.html">GIFT CARDS</a></li>
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
                      <a href="wishlist.html"><i className="far fa-heart" /></a></li>
                    <li className="has-dropdown">
                      <a className="mini-cart-shop-link"><i className="fas fa-shopping-bag" />
                        <span className="total-item-round">2</span></a>
                      {/*====== Dropdown ======*/}
                      <span className="js-menu-toggle" />
                      <div className="mini-cart">
                        {/*====== Mini Product Container ======*/}
                        <div className="mini-product-container gl-scroll u-s-m-b-15">
                          {/*====== Card for mini cart ======*/}
                          <div className="card-mini-product">
                            <div className="mini-product">
                              <div className="mini-product__image-wrapper">
                                <a className="mini-product__link" href="product-detail.html">
                                  <img className="u-img-fluid" src="assetes/images/product/electronic/product3.jpg"  /></a></div>
                              <div className="mini-product__info-wrapper">
                                <span className="mini-product__category">
                                  <a href="shop-side-version-2.html">Electronics</a></span>
                                <span className="mini-product__name">
                                  <a href="product-detail.html">Yellow Wireless Headphone</a></span>
                                <span className="mini-product__quantity">1 x</span>
                                <span className="mini-product__price">$8</span></div>
                            </div>
                            <a className="mini-product__delete-link far fa-trash-" />
                          </div>
                          {/*====== End - Card for mini cart ======*/}
                          {/*====== Card for mini cart ======*/}
                          <div className="card-mini-product">
                            <div className="mini-product">
                              <div className="mini-product__image-wrapper">
                                <a className="mini-product__link" href="product-detail.html">
                                  <img className="u-img-fluid" src="assetes/images/product/electronic/product18.jpg"  /></a></div>
                              <div className="mini-product__info-wrapper">
                                <span className="mini-product__category">
                                  <a href="shop-side-version-2.html">Electronics</a></span>
                                <span className="mini-product__name">
                                  <a href="product-detail.html">Nikon DSLR Camera 4k</a></span>
                                <span className="mini-product__quantity">1 x</span>
                                <span className="mini-product__price">$8</span></div>
                            </div>
                            <a className="mini-product__delete-link far fa-trash-" />
                          </div>
                          {/*====== End - Card for mini cart ======*/}
                          {/*====== Card for mini cart ======*/}
                          <div className="card-mini-product">
                            <div className="mini-product">
                              <div className="mini-product__image-wrapper">
                                <a className="mini-product__link" href="product-detail.html">
                                  <img className="u-img-fluid" src="assetes/images/product/women/product8.jpg"  /></a></div>
                              <div className="mini-product__info-wrapper">
                                <span className="mini-product__category">
                                  <a href="shop-side-version-2.html">Women Clothing</a></span>
                                <span className="mini-product__name">
                                  <a href="product-detail.html">New Dress D Nice Elegant</a></span>
                                <span className="mini-product__quantity">1 x</span>
                                <span className="mini-product__price">$8</span></div>
                            </div>
                            <a className="mini-product__delete-link far fa-trash-" />
                          </div>
                          {/*====== End - Card for mini cart ======*/}
                          {/*====== Card for mini cart ======*/}
                          <div className="card-mini-product">
                            <div className="mini-product">
                              <div className="mini-product__image-wrapper">
                                <a className="mini-product__link" href="product-detail.html">
                                  <img className="u-img-fluid" src="assetes/images/product/men/product8.jpg"  /></a></div>
                              <div className="mini-product__info-wrapper">
                                <span className="mini-product__category">
                                  <a href="shop-side-version-2.html">Men Clothing</a></span>
                                <span className="mini-product__name">
                                  <a href="product-detail.html">New Fashion D Nice Elegant</a></span>
                                <span className="mini-product__quantity">1 x</span>
                                <span className="mini-product__price">$8</span></div>
                            </div>
                            <a className="mini-product__delete-link far fa-trash-" />
                          </div>
                          {/*====== End - Card for mini cart ======*/}
                        </div>
                        {/*====== End - Mini Product Container ======*/}
                        {/*====== Mini Product Statistics ======*/}
                        <div className="mini-product-stat">
                          <div className="mini-total">
                            <span className="subtotal-text">SUBTOTAL</span>
                            <span className="subtotal-value">$16</span></div>
                          <div className="mini-action">
                            <a className="mini-link btn--e-brand-b-2" href="checkout.html">PROCEED TO CHECKOUT</a>
                            <a className="mini-link btn--e-transparent-secondary-b-2" href="cart.html">VIEW CART</a></div>
                        </div>
                        {/*====== End - Mini Product Statistics ======*/}
                      </div>
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
      {/*====== End - Main Header ======*/}
      {/*====== App Content ======*/}
      <div className="app-content">
        {/*====== Primary Slider ======*/}
       {/*====== Primary Slider ======*/}
       <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-autoWidth" style={{width: '100%'}} src="bb.jpg" />
    </div>

  </div>
</div>
        {/*====== End - Primary Slider ======*/}
        {/*====== Section 1 ======*/}
        <div className="u-s-p-y-60">
          {/*====== Section Intro ======*/}
          <div className="section__intro u-s-m-b-46">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section__text-wrap">
                    <h1 className="section__heading u-c-secondary u-s-m-b-12">SHOP BY DEALS</h1>
                    <span className="section__span u-c-silver">BROWSE FAVOURITE DEALS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Intro ======*/}
          {/*====== Section Content ======*/}
          <div className="section__content">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-5 u-s-m-b-30">
                  <a className="collection" href="shop-side-version-2.html">
                    <div className="aspect aspect--bg-grey aspect--square">
                      <img className="aspect__img collection__img" src="assetes/images/collection/coll-1.jpg"  /></div>
                  </a></div>
                <div className="col-lg-7 col-md-7 u-s-m-b-30">
                  <a className="collection" href="shop-side-version-2.html">
                    <div className="aspect aspect--bg-grey aspect--1286-890">
                      <img className="aspect__img collection__img" src="assetes/images/collection/coll-2.jpg"  /></div>
                  </a></div>
                <div className="col-lg-7 col-md-7 u-s-m-b-30">
                  <a className="collection" href="shop-side-version-2.html">
                    <div className="aspect aspect--bg-grey aspect--1286-890">
                      <img className="aspect__img collection__img" src="assetes/images/collection/coll-3.jpg"  /></div>
                  </a></div>
                <div className="col-lg-5 col-md-5 u-s-m-b-30">
                  <a className="collection" href="shop-side-version-2.html">
                    <div className="aspect aspect--bg-grey aspect--square">
                      <img className="aspect__img collection__img" src="assetes/images/collection/coll-4.jpg"  /></div>
                  </a></div>
              </div>
            </div>
          </div>
          {/*====== Section Content ======*/}
        </div>
        {/*====== End - Section 1 ======*/}
        {/*====== Section 2 ======*/}
        <div className="u-s-p-b-60">
          {/*====== Section Intro ======*/}
          <div className="section__intro u-s-m-b-16">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section__text-wrap">
                    <h1 className="section__heading u-c-secondary u-s-m-b-12">TOP TRENDING</h1>
                    <span className="section__span u-c-silver">CHOOSE CATEGORY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Intro ======*/}
          {/*====== Section Content ======*/}
          <div className="section__content">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="filter-category-container">
                    <div className="filter__category-wrapper">
                      <button className="btn filter__btn filter__btn--style-1 js-checked" type="button" data-filter="*">ALL</button></div>
                    <div className="filter__category-wrapper">
                      <button className="btn filter__btn filter__btn--style-1" type="button" data-filter=".headphone">HEADPHONES</button></div>
                    <div className="filter__category-wrapper">
                      <button className="btn filter__btn filter__btn--style-1" type="button" data-filter=".smartphone">SMARTPHONES</button></div>
                    <div className="filter__category-wrapper">
                      <button className="btn filter__btn filter__btn--style-1" type="button" data-filter=".sportgadget">SPORT GADGETS</button></div>
                    <div className="filter__category-wrapper">
                      <button className="btn filter__btn filter__btn--style-1" type="button" data-filter=".dslr">DSLR</button></div>
                  </div>
                  <div className="filter__grid-wrapper u-s-m-t-30">
                    <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item headphone">
                        <div className="product-o product-o--hover-on product-o--radius">
                          <div className="product-o__wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product2.jpg"  /></a>
                            <div className="product-o__action-wrap">
                              <ul className="product-o__action-list">
                                <li>
                                  <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                <li>
                                  <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                              </ul>
                            </div>
                          </div>
                          <span className="product-o__category">
                            <a href="shop-side-version-2.html">Electronics</a></span>
                          <span className="product-o__name">
                            <a href="product-detail.html">Red Wireless Headphone</a></span>
                          <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-" />
                            <span className="product-o__review">(23)</span></div>
                          <span className="product-o__price">$125.00
                            <span className="product-o__discount">$160.00</span></span>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item headphone">
                        <div className="product-o product-o--hover-on product-o--radius">
                          <div className="product-o__wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product3.jpg"  /></a>
                            <div className="product-o__action-wrap">
                              <ul className="product-o__action-list">
                                <li>
                                  <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                <li>
                                  <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                              </ul>
                            </div>
                          </div>
                          <span className="product-o__category">
                            <a href="shop-side-version-2.html">Electronics</a></span>
                          <span className="product-o__name">
                            <a href="product-detail.html">Yellow Wireless Headphone</a></span>
                          <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-" /><i className="far fa-star" /><i className="far fa-star" />
                            <span className="product-o__review">(23)</span></div>
                          <span className="product-o__price">$125.00
                            <span className="product-o__discount">$160.00</span></span>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item sportgadget">
                        <div className="product-o product-o--hover-on product-o--radius">
                          <div className="product-o__wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product4.jpg"  /></a>
                            <div className="product-o__action-wrap">
                              <ul className="product-o__action-list">
                                <li>
                                  <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                <li>
                                  <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                              </ul>
                            </div>
                          </div>
                          <span className="product-o__category">
                            <a href="shop-side-version-2.html">Electronics</a></span>
                          <span className="product-o__name">
                            <a href="product-detail.html">Hover Skateboard Scooter</a></span>
                          <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-" />
                            <span className="product-o__review">(23)</span></div>
                          <span className="product-o__price">$125.00
                            <span className="product-o__discount">$160.00</span></span>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item sportgadget">
                        <div className="product-o product-o--hover-on product-o--radius">
                          <div className="product-o__wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product5.jpg"  /></a>
                            <div className="product-o__action-wrap">
                              <ul className="product-o__action-list">
                                <li>
                                  <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                <li>
                                  <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                              </ul>
                            </div>
                          </div>
                          <span className="product-o__category">
                            <a href="shop-side-version-2.html">Electronics</a></span>
                          <span className="product-o__name">
                            <a href="product-detail.html">Hover Red Skateboard Scooter</a></span>
                          <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-" />
                            <span className="product-o__review">(23)</span></div>
                          <span className="product-o__price">$125.00
                            <span className="product-o__discount">$160.00</span></span>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item dslr">
                        <div className="product-o product-o--hover-on product-o--radius">
                          <div className="product-o__wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product6.jpg"  /></a>
                            <div className="product-o__action-wrap">
                              <ul className="product-o__action-list">
                                <li>
                                  <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                <li>
                                  <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                              </ul>
                            </div>
                          </div>
                          <span className="product-o__category">
                            <a href="shop-side-version-2.html">Electronics</a></span>
                          <span className="product-o__name">
                            <a href="product-detail.html">Canon DSLR Camera 4k</a></span>
                          <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-" />
                            <span className="product-o__review">(23)</span></div>
                          <span className="product-o__price">$125.00
                            <span className="product-o__discount">$160.00</span></span>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item dslr">
                        <div className="product-o product-o--hover-on product-o--radius">
                          <div className="product-o__wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product7.jpg"  /></a>
                            <div className="product-o__action-wrap">
                              <ul className="product-o__action-list">
                                <li>
                                  <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                <li>
                                  <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                              </ul>
                            </div>
                          </div>
                          <span className="product-o__category">
                            <a href="shop-side-version-2.html">Electronics</a></span>
                          <span className="product-o__name">
                            <a href="product-detail.html">Nikon DSLR Camera 4k</a></span>
                          <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-" />
                            <span className="product-o__review">(23)</span></div>
                          <span className="product-o__price">$125.00
                            <span className="product-o__discount">$160.00</span></span>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item smartphone">
                        <div className="product-o product-o--hover-on product-o--radius">
                          <div className="product-o__wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product8.jpg"  /></a>
                            <div className="product-o__action-wrap">
                              <ul className="product-o__action-list">
                                <li>
                                  <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                <li>
                                  <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                              </ul>
                            </div>
                          </div>
                          <span className="product-o__category">
                            <a href="shop-side-version-2.html">Electronics</a></span>
                          <span className="product-o__name">
                            <a href="product-detail.html">Smartphone RAM 4GB New</a></span>
                          <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-" />
                            <span className="product-o__review">(23)</span></div>
                          <span className="product-o__price">$125.00
                            <span className="product-o__discount">$160.00</span></span>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item smartphone">
                        <div className="product-o product-o--hover-on product-o--radius">
                          <div className="product-o__wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product9.jpg"  /></a>
                            <div className="product-o__action-wrap">
                              <ul className="product-o__action-list">
                                <li>
                                  <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                <li>
                                  <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                              </ul>
                            </div>
                          </div>
                          <span className="product-o__category">
                            <a href="shop-side-version-2.html">Electronics</a></span>
                          <span className="product-o__name">
                            <a href="product-detail.html">Smartphone RAM 8GB New</a></span>
                          <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-" />
                            <span className="product-o__review">(23)</span></div>
                          <span className="product-o__price">$125.00
                            <span className="product-o__discount">$160.00</span></span>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item smartphone">
                        <div className="product-o product-o--hover-on product-o--radius">
                          <div className="product-o__wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product10.jpg"  /></a>
                            <div className="product-o__action-wrap">
                              <ul className="product-o__action-list">
                                <li>
                                  <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                <li>
                                  <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                <li>
                                  <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                              </ul>
                            </div>
                          </div>
                          <span className="product-o__category">
                            <a href="shop-side-version-2.html">Electronics</a></span>
                          <span className="product-o__name">
                            <a href="product-detail.html">Smartphone RAM 16GB New</a></span>
                          <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-" />
                            <span className="product-o__review">(23)</span></div>
                          <span className="product-o__price">$125.00
                            <span className="product-o__discount">$160.00</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="load-more">
                    <button className="btn btn--e-brand" type="button">Load More</button></div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Content ======*/}
        </div>
        {/*====== End - Section 2 ======*/}
        {/*====== Section 3 ======*/}
        <div className="u-s-p-b-60">
          {/*====== Section Intro ======*/}
          <div className="section__intro u-s-m-b-46">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section__text-wrap">
                    <h1 className="section__heading u-c-secondary u-s-m-b-12">DEAL OF THE DAY</h1>
                    <span className="section__span u-c-silver">BUY DEAL OF THE DAY, HURRY UP! THESE NEW PRODUCTS WILL EXPIRE SOON.</span>
                    <span className="section__span u-c-silver">ADD THESE ON YOUR CART.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Intro ======*/}
          {/*====== Section Content ======*/}
          <div className="section__content">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 u-s-m-b-30">
                  <div className="product-o product-o--radius product-o--hover-off u-h-100">
                    <div className="product-o__wrap">
                      <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                        <img className="aspect__img" src="assetes/images/product/electronic/product11.jpg"  /></a>
                      <div className="product-o__special-count-wrap">
                        <div className="countdown countdown--style-special" data-countdown="2020/05/01" />
                      </div>
                      <div className="product-o__action-wrap">
                        <ul className="product-o__action-list">
                          <li>
                            <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                          <li>
                            <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                          <li>
                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                          <li>
                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <span className="product-o__category">
                      <a href="shop-side-version-2.html">Electronics</a></span>
                    <span className="product-o__name">
                      <a href="product-detail.html">DJI Phantom Drone 4k</a></span>
                    <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                      <span className="product-o__review">(2)</span></div>
                    <span className="product-o__price">$125.00
                      <span className="product-o__discount">$160.00</span></span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 u-s-m-b-30">
                  <div className="product-o product-o--radius product-o--hover-off u-h-100">
                    <div className="product-o__wrap">
                      <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                        <img className="aspect__img" src="assetes/images/product/electronic/product12.jpg"  /></a>
                      <div className="product-o__special-count-wrap">
                        <div className="countdown countdown--style-special" data-countdown="2020/05/01" />
                      </div>
                      <div className="product-o__action-wrap">
                        <ul className="product-o__action-list">
                          <li>
                            <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                          <li>
                            <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                          <li>
                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                          <li>
                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <span className="product-o__category">
                      <a href="shop-side-version-2.html">Electronics</a></span>
                    <span className="product-o__name">
                      <a href="product-detail.html">DJI Phantom Drone 2k</a></span>
                    <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                      <span className="product-o__review">(2)</span></div>
                    <span className="product-o__price">$125.00
                      <span className="product-o__discount">$160.00</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Content ======*/}
        </div>
        {/*====== End - Section 3 ======*/}
        {/*====== Section 4 ======*/}
        <div className="u-s-p-b-60">
          {/*====== Section Intro ======*/}
          <div className="section__intro u-s-m-b-46">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section__text-wrap">
                    <h1 className="section__heading u-c-secondary u-s-m-b-12">NEW ARRIVALS</h1>
                    <span className="section__span u-c-silver">GET UP FOR NEW ARRIVALS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Intro ======*/}
          {/*====== Section Content ======*/}
          <div className="section__content">
            <div className="container">
              <div className="slider-fouc">
                <div className="owl-carousel product-slider" data-item={4}>
                  <div className="u-s-m-b-30">
                    <div className="product-o product-o--hover-on">
                      <div className="product-o__wrap">
                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                          <img className="aspect__img" src="assetes/images/product/electronic/product13.jpg"  /></a>
                        <div className="product-o__action-wrap">
                          <ul className="product-o__action-list">
                            <li>
                              <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                            <li>
                              <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                            <li>
                              <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                            <li>
                              <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <span className="product-o__category">
                        <a href="shop-side-version-2.html">Electronics</a></span>
                      <span className="product-o__name">
                        <a href="product-detail.html">Nikon DSLR 4K Camera</a></span>
                      <div className="product-o__rating gl-rating-style"><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" />
                        <span className="product-o__review">(0)</span></div>
                      <span className="product-o__price">$125.00
                        <span className="product-o__discount">$160.00</span></span>
                    </div>
                  </div>
                  <div className="u-s-m-b-30">
                    <div className="product-o product-o--hover-on">
                      <div className="product-o__wrap">
                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                          <img className="aspect__img" src="assetes/images/product/electronic/product14.jpg"  /></a>
                        <div className="product-o__action-wrap">
                          <ul className="product-o__action-list">
                            <li>
                              <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                            <li>
                              <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                            <li>
                              <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                            <li>
                              <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <span className="product-o__category">
                        <a href="shop-side-version-2.html">Electronics</a></span>
                      <span className="product-o__name">
                        <a href="product-detail.html">Nikon DSLR 2K Camera</a></span>
                      <div className="product-o__rating gl-rating-style"><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" />
                        <span className="product-o__review">(0)</span></div>
                      <span className="product-o__price">$125.00
                        <span className="product-o__discount">$160.00</span></span>
                    </div>
                  </div>
                  <div className="u-s-m-b-30">
                    <div className="product-o product-o--hover-on">
                      <div className="product-o__wrap">
                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                          <img className="aspect__img" src="assetes/images/product/electronic/product15.jpg"  /></a>
                        <div className="product-o__action-wrap">
                          <ul className="product-o__action-list">
                            <li>
                              <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                            <li>
                              <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                            <li>
                              <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                            <li>
                              <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <span className="product-o__category">
                        <a href="shop-side-version-2.html">Electronics</a></span>
                      <span className="product-o__name">
                        <a href="product-detail.html">Sony DSLR 4K Camera</a></span>
                      <div className="product-o__rating gl-rating-style"><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" />
                        <span className="product-o__review">(0)</span></div>
                      <span className="product-o__price">$125.00
                        <span className="product-o__discount">$160.00</span></span>
                    </div>
                  </div>
                  <div className="u-s-m-b-30">
                    <div className="product-o product-o--hover-on">
                      <div className="product-o__wrap">
                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                          <img className="aspect__img" src="assetes/images/product/electronic/product16.jpg"  /></a>
                        <div className="product-o__action-wrap">
                          <ul className="product-o__action-list">
                            <li>
                              <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                            <li>
                              <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                            <li>
                              <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                            <li>
                              <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <span className="product-o__category">
                        <a href="shop-side-version-2.html">Electronics</a></span>
                      <span className="product-o__name">
                        <a href="product-detail.html">Sony DSLR 2K Camera</a></span>
                      <div className="product-o__rating gl-rating-style"><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" />
                        <span className="product-o__review">(0)</span></div>
                      <span className="product-o__price">$125.00
                        <span className="product-o__discount">$160.00</span></span>
                    </div>
                  </div>
                  <div className="u-s-m-b-30">
                    <div className="product-o product-o--hover-on">
                      <div className="product-o__wrap">
                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                          <img className="aspect__img" src="assetes/images/product/electronic/product17.jpg"  /></a>
                        <div className="product-o__action-wrap">
                          <ul className="product-o__action-list">
                            <li>
                              <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                            <li>
                              <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                            <li>
                              <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                            <li>
                              <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <span className="product-o__category">
                        <a href="shop-side-version-2.html">Electronics</a></span>
                      <span className="product-o__name">
                        <a href="product-detail.html">Canon DSLR 4K Camera</a></span>
                      <div className="product-o__rating gl-rating-style"><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" />
                        <span className="product-o__review">(0)</span></div>
                      <span className="product-o__price">$125.00
                        <span className="product-o__discount">$160.00</span></span>
                    </div>
                  </div>
                  <div className="u-s-m-b-30">
                    <div className="product-o product-o--hover-on">
                      <div className="product-o__wrap">
                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                          <img className="aspect__img" src="assetes/images/product/electronic/product18.jpg"  /></a>
                        <div className="product-o__action-wrap">
                          <ul className="product-o__action-list">
                            <li>
                              <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                            <li>
                              <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                            <li>
                              <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                            <li>
                              <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <span className="product-o__category">
                        <a href="shop-side-version-2.html">Electronics</a></span>
                      <span className="product-o__name">
                        <a href="product-detail.html">Canon DSLR 2K Camera</a></span>
                      <div className="product-o__rating gl-rating-style"><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" />
                        <span className="product-o__review">(0)</span></div>
                      <span className="product-o__price">$125.00
                        <span className="product-o__discount">$160.00</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Content ======*/}
        </div>
        {/*====== End - Section 4 ======*/}
        {/*====== Section 5 ======*/}
        <div className="banner-bg">
          {/*====== Section Content ======*/}
          <div className="section__content">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner-bg__countdown">
                    <div className="countdown countdown--style-banner" data-countdown="2020/05/01" />
                  </div>
                  <div className="banner-bg__wrap">
                    <div className="banner-bg__text-1">
                      <span className="u-c-white">Global</span>
                      <span className="u-c-secondary">Offers</span></div>
                    <div className="banner-bg__text-2">
                      <span className="u-c-secondary">Official Launch</span>
                      <span className="u-c-white">Don't Miss!</span></div>
                    <span className="banner-bg__text-block banner-bg__text-3 u-c-secondary">Enjoy Free Shipping when you buy 2 items and above!</span>
                    <a className="banner-bg__shop-now btn--e-secondary" href="shop-side-version-2.html">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Content ======*/}
        </div>
        {/*====== End - Section 5 ======*/}
        {/*====== Section 6 ======*/}
        <div className="u-s-p-y-60">
          {/*====== Section Intro ======*/}
          <div className="section__intro u-s-m-b-46">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section__text-wrap">
                    <h1 className="section__heading u-c-secondary u-s-m-b-12">FEATURED PRODUCTS</h1>
                    <span className="section__span u-c-silver">FIND NEW FEATURED PRODUCTS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Intro ======*/}
          {/*====== Section Content ======*/}
          <div className="section__content">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                  <div className="product-o product-o--hover-on u-h-100">
                    <div className="product-o__wrap">
                      <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                        <img className="aspect__img" src="assetes/images/product/electronic/product19.jpg"  /></a>
                      <div className="product-o__action-wrap">
                        <ul className="product-o__action-list">
                          <li>
                            <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                          <li>
                            <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                          <li>
                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                          <li>
                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <span className="product-o__category">
                      <a href="shop-side-version-2.html">Electronics</a></span>
                    <span className="product-o__name">
                      <a href="product-detail.html">Tablet 14inch Screen</a></span>
                    <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-" />
                      <span className="product-o__review">(23)</span></div>
                    <span className="product-o__price">$125.00
                      <span className="product-o__discount">$160.00</span></span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                  <div className="product-o product-o--hover-on u-h-100">
                    <div className="product-o__wrap">
                      <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                        <img className="aspect__img" src="assetes/images/product/electronic/product20.jpg"  /></a>
                      <div className="product-o__action-wrap">
                        <ul className="product-o__action-list">
                          <li>
                            <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                          <li>
                            <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                          <li>
                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                          <li>
                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <span className="product-o__category">
                      <a href="shop-side-version-2.html">Electronics</a></span>
                    <span className="product-o__name">
                      <a href="product-detail.html">Tablet 18inch Screen</a></span>
                    <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-" />
                      <span className="product-o__review">(23)</span></div>
                    <span className="product-o__price">$125.00
                      <span className="product-o__discount">$160.00</span></span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                  <div className="product-o product-o--hover-on u-h-100">
                    <div className="product-o__wrap">
                      <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                        <img className="aspect__img" src="assetes/images/product/electronic/product21.jpg"  /></a>
                      <div className="product-o__action-wrap">
                        <ul className="product-o__action-list">
                          <li>
                            <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                          <li>
                            <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                          <li>
                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                          <li>
                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <span className="product-o__category">
                      <a href="shop-side-version-2.html">Electronics</a></span>
                    <span className="product-o__name">
                      <a href="product-detail.html">Tablet 13inch Screen Ram 16GB</a></span>
                    <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-" />
                      <span className="product-o__review">(23)</span></div>
                    <span className="product-o__price">$125.00
                      <span className="product-o__discount">$160.00</span></span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                  <div className="product-o product-o--hover-on u-h-100">
                    <div className="product-o__wrap">
                      <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                        <img className="aspect__img" src="assetes/images/product/electronic/product22.jpg"  /></a>
                      <div className="product-o__action-wrap">
                        <ul className="product-o__action-list">
                          <li>
                            <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                          <li>
                            <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                          <li>
                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                          <li>
                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <span className="product-o__category">
                      <a href="shop-side-version-2.html">Electronics</a></span>
                    <span className="product-o__name">
                      <a href="product-detail.html">Tablet 12inch Screen Ram 16GB</a></span>
                    <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-" />
                      <span className="product-o__review">(23)</span></div>
                    <span className="product-o__price">$125.00
                      <span className="product-o__discount">$160.00</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Content ======*/}
        </div>
        {/*====== End - Section 6 ======*/}
        {/*====== Section 7 ======*/}
        <div className="u-s-p-b-60">
          {/*====== Section Content ======*/}
          <div className="section__content">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                  <a className="promotion" href="shop-side-version-2.html">
                    <div className="aspect aspect--bg-grey aspect--square">
                      <img className="aspect__img promotion__img" src="assetes/images/promo/promo-img-1.jpg"  /></div>
                    <div className="promotion__content">
                      <div className="promotion__text-wrap">
                        <div className="promotion__text-1">
                          <span className="u-c-secondary">ACCESSORIES FOR YOUR EVERYDAY</span></div>
                        <div className="promotion__text-2">
                          <span className="u-c-secondary">GET IN</span>
                          <span className="u-c-brand">TOUCH</span></div>
                      </div>
                    </div>
                  </a></div>
                <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                  <a className="promotion" href="shop-side-version-2.html">
                    <div className="aspect aspect--bg-grey aspect--square">
                      <img className="aspect__img promotion__img" src="assetes/images/promo/promo-img-2.jpg"  /></div>
                    <div className="promotion__content">
                      <div className="promotion__text-wrap">
                        <div className="promotion__text-1">
                          <span className="u-c-secondary">SMARTPHONE</span>
                          <span className="u-c-brand">2019</span></div>
                        <div className="promotion__text-2">
                          <span className="u-c-secondary">NEW ARRIVALS</span></div>
                      </div>
                    </div>
                  </a></div>
                <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                  <a className="promotion" href="shop-side-version-2.html">
                    <div className="aspect aspect--bg-grey aspect--square">
                      <img className="aspect__img promotion__img" src="assetes/images/promo/promo-img-3.jpg"  /></div>
                    <div className="promotion__content">
                      <div className="promotion__text-wrap">
                        <div className="promotion__text-1">
                          <span className="u-c-secondary">DSLR FOR NEW GENERATION</span></div>
                        <div className="promotion__text-2">
                          <span className="u-c-brand">GET UP TO 10% OFF</span></div>
                      </div>
                    </div>
                  </a></div>
              </div>
            </div>
          </div>
          {/*====== End - Section Content ======*/}
        </div>
        {/*====== End - Section 7 ======*/}
        {/*====== Section 8 ======*/}
        <div className="u-s-p-b-60">
          {/*====== Section Content ======*/}
          <div className="section__content">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                  <div className="column-product">
                    <span className="column-product__title u-c-secondary u-s-m-b-25">SPECIAL PRODUCTS</span>
                    <ul className="column-product__list">
                      <li className="column-product__item">
                        <div className="product-l">
                          <div className="product-l__img-wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product23.jpg"  /></a></div>
                          <div className="product-l__info-wrap">
                            <span className="product-l__category">
                              <a href="shop-side-version-2.html">Electronics</a></span>
                            <span className="product-l__name">
                              <a href="product-detail.html">Razor Gear 15 Ram 16GB</a></span>
                            <span className="product-l__price">$125.00</span></div>
                        </div>
                      </li>
                      <li className="column-product__item">
                        <div className="product-l">
                          <div className="product-l__img-wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product24.jpg"  /></a></div>
                          <div className="product-l__info-wrap">
                            <span className="product-l__category">
                              <a href="shop-side-version-2.html">Electronics</a></span>
                            <span className="product-l__name">
                              <a href="product-detail.html">Razor Gear 13 Ram 16GB</a></span>
                            <span className="product-l__price">$125.00</span></div>
                        </div>
                      </li>
                      <li className="column-product__item">
                        <div className="product-l">
                          <div className="product-l__img-wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product25.jpg"  /></a></div>
                          <div className="product-l__info-wrap">
                            <span className="product-l__category">
                              <a href="shop-side-version-2.html">Electronics</a></span>
                            <span className="product-l__name">
                              <a href="product-detail.html">Razor Gear 15 Ram 8GB</a></span>
                            <span className="product-l__price">$125.00</span></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                  <div className="column-product">
                    <span className="column-product__title u-c-secondary u-s-m-b-25">WEEKLY PRODUCTS</span>
                    <ul className="column-product__list">
                      <li className="column-product__item">
                        <div className="product-l">
                          <div className="product-l__img-wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product26.jpg"  /></a></div>
                          <div className="product-l__info-wrap">
                            <span className="product-l__category">
                              <a href="shop-side-version-2.html">Electronics</a></span>
                            <span className="product-l__name">
                              <a href="product-detail.html">Razor Gear 10 Ram 16GB</a></span>
                            <span className="product-l__price">$125.00
                              <span className="product-l__discount">$160</span></span></div>
                        </div>
                      </li>
                      <li className="column-product__item">
                        <div className="product-l">
                          <div className="product-l__img-wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product27.jpg"  /></a></div>
                          <div className="product-l__info-wrap">
                            <span className="product-l__category">
                              <a href="shop-side-version-2.html">Electronics</a></span>
                            <span className="product-l__name">
                              <a href="product-detail.html">Razor Gear 15 Ram 8GB</a></span>
                            <span className="product-l__price">$125.00
                              <span className="product-l__discount">$160</span></span></div>
                        </div>
                      </li>
                      <li className="column-product__item">
                        <div className="product-l">
                          <div className="product-l__img-wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product28.jpg"  /></a></div>
                          <div className="product-l__info-wrap">
                            <span className="product-l__category">
                              <a href="shop-side-version-2.html">Electronics</a></span>
                            <span className="product-l__name">
                              <a href="product-detail.html">Razor Gear 15 Ultra Ram 16GB</a></span>
                            <span className="product-l__price">$125.00
                              <span className="product-l__discount">$160</span></span></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                  <div className="column-product">
                    <span className="column-product__title u-c-secondary u-s-m-b-25">FLASH PRODUCTS</span>
                    <ul className="column-product__list">
                      <li className="column-product__item">
                        <div className="product-l">
                          <div className="product-l__img-wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product29.jpg"  /></a></div>
                          <div className="product-l__info-wrap">
                            <div className="product-l__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /></div>
                            <span className="product-l__category">
                              <a href="shop-side-version-2.html">Electronics</a></span>
                            <span className="product-l__name">
                              <a href="product-detail.html">Razor Gear 20 Ultra Ram 16GB</a></span>
                            <span className="product-l__price">$125.00</span>
                          </div>
                        </div>
                      </li>
                      <li className="column-product__item">
                        <div className="product-l">
                          <div className="product-l__img-wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product30.jpg"  /></a></div>
                          <div className="product-l__info-wrap">
                            <div className="product-l__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /></div>
                            <span className="product-l__category">
                              <a href="shop-side-version-2.html">Electronics</a></span>
                            <span className="product-l__name">
                              <a href="product-detail.html">Razor Gear 11 Ultra Ram 16GB</a></span>
                            <span className="product-l__price">$125.00</span>
                          </div>
                        </div>
                      </li>
                      <li className="column-product__item">
                        <div className="product-l">
                          <div className="product-l__img-wrap">
                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                              <img className="aspect__img" src="assetes/images/product/electronic/product31.jpg"  /></a></div>
                          <div className="product-l__info-wrap">
                            <div className="product-l__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /></div>
                            <span className="product-l__category">
                              <a href="shop-side-version-2.html">Electronics</a></span>
                            <span className="product-l__name">
                              <a href="product-detail.html">Razor Gear 10 Ultra Ram 16GB</a></span>
                            <span className="product-l__price">$125.00</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Content ======*/}
        </div>
        {/*====== End - Section 8 ======*/}
        {/*====== Section 9 ======*/}
        <div className="u-s-p-b-60">
          {/*====== Section Content ======*/}
          <div className="section__content">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                  <div className="service u-h-100">
                    <div className="service__icon"><i className="fas fa-truck" /></div>
                    <div className="service__info-wrap">
                      <span className="service__info-text-1">Free Shipping</span>
                      <span className="service__info-text-2">Free shipping on all US order or order above $200</span></div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                  <div className="service u-h-100">
                    <div className="service__icon"><i className="fas fa-redo" /></div>
                    <div className="service__info-wrap">
                      <span className="service__info-text-1">Shop with Confidence</span>
                      <span className="service__info-text-2">Our Protection covers your purchase from click to delivery</span></div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                  <div className="service u-h-100">
                    <div className="service__icon"><i className="fas fa-headphones-" /></div>
                    <div className="service__info-wrap">
                      <span className="service__info-text-1">24/7 Help Center</span>
                      <span className="service__info-text-2">Round-the-clock assistance for a smooth shopping experience</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Content ======*/}
        </div>
        {/*====== End - Section 9 ======*/}
        {/*====== Section 10 ======*/}
        <div className="u-s-p-b-60">
          {/*====== Section Intro ======*/}
          <div className="section__intro u-s-m-b-46">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section__text-wrap">
                    <h1 className="section__heading u-c-secondary u-s-m-b-12">LATEST FROM BLOG</h1>
                    <span className="section__span u-c-silver">START YOU DAY WITH FRESH AND LATEST NEWS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Intro ======*/}
          {/*====== Section Content ======*/}
          <div className="section__content">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                  <div className="bp-mini bp-mini--img u-h-100">
                    <div className="bp-mini__thumbnail">
                      {/*====== Image Code ======*/}
                      <a className="aspect aspect--bg-grey aspect--1366-768 u-d-block" href="blog-detail.html">
                        <img className="aspect__img" src="assetes/images/blog/post-2.jpg"  /></a>
                      {/*====== End - Image Code ======*/}
                    </div>
                    <div className="bp-mini__content">
                      <div className="bp-mini__stat">
                        <span className="bp-mini__stat-wrap">
                          <span className="bp-mini__publish-date">
                            <a>
                              <span>25 February 2018</span></a></span></span>
                        <span className="bp-mini__stat-wrap">
                          <span className="bp-mini__preposition">By</span>
                          <span className="bp-mini__author">
                            <a href="#">Dayle</a></span></span>
                        <span className="bp-mini__stat">
                          <span className="bp-mini__comment">
                            <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4" />
                              <span>8</span></a></span></span></div>
                      <div className="bp-mini__category">
                        <a>Learning</a>
                        <a>News</a>
                        <a>Heh</a></div>
                      <span className="bp-mini__h1">
                        <a href="blog-detail.html">Life is an extraordinary Adventure</a></span>
                      <p className="bp-mini__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <div className="blog-t-w">
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Travel</a>
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Culture</a>
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Place</a></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                  <div className="bp-mini bp-mini--img u-h-100">
                    <div className="bp-mini__thumbnail">
                      {/*====== Image Code ======*/}
                      <a className="aspect aspect--bg-grey aspect--1366-768 u-d-block" href="blog-detail.html">
                        <img className="aspect__img" src="assetes/images/blog/post-12.jpg"  /></a>
                      {/*====== End - Image Code ======*/}
                    </div>
                    <div className="bp-mini__content">
                      <div className="bp-mini__stat">
                        <span className="bp-mini__stat-wrap">
                          <span className="bp-mini__publish-date">
                            <a>
                              <span>25 February 2018</span></a></span></span>
                        <span className="bp-mini__stat-wrap">
                          <span className="bp-mini__preposition">By</span>
                          <span className="bp-mini__author">
                            <a href="#">Dayle</a></span></span>
                        <span className="bp-mini__stat">
                          <span className="bp-mini__comment">
                            <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4" />
                              <span>8</span></a></span></span></div>
                      <div className="bp-mini__category">
                        <a>Learning</a>
                        <a>News</a>
                        <a>Heh</a></div>
                      <span className="bp-mini__h1">
                        <a href="blog-detail.html">Wait till its open</a></span>
                      <p className="bp-mini__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <div className="blog-t-w">
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Travel</a>
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Culture</a>
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Place</a></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                  <div className="bp-mini bp-mini--img u-h-100">
                    <div className="bp-mini__thumbnail">
                      {/*====== Image Code ======*/}
                      <a className="aspect aspect--bg-grey aspect--1366-768 u-d-block" href="blog-detail.html">
                        <img className="aspect__img" src="assetes/images/blog/post-5.jpg"  /></a>
                      {/*====== End - Image Code ======*/}
                    </div>
                    <div className="bp-mini__content">
                      <div className="bp-mini__stat">
                        <span className="bp-mini__stat-wrap">
                          <span className="bp-mini__publish-date">
                            <a>
                              <span>25 February 2018</span></a></span></span>
                        <span className="bp-mini__stat-wrap">
                          <span className="bp-mini__preposition">By</span>
                          <span className="bp-mini__author">
                            <a href="#">Dayle</a></span></span>
                        <span className="bp-mini__stat">
                          <span className="bp-mini__comment">
                            <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4" />
                              <span>8</span></a></span></span></div>
                      <div className="bp-mini__category">
                        <a>Learning</a>
                        <a>News</a>
                        <a>Heh</a></div>
                      <span className="bp-mini__h1">
                        <a href="blog-detail.html">Tell me difference between smoke and vape</a></span>
                      <p className="bp-mini__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <div className="blog-t-w">
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Travel</a>
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Culture</a>
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Place</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Content ======*/}
        </div>
        {/*====== End - Section 10 ======*/}
        {/*====== Section 11 ======*/}
  
  
        {/*====== End - Section 11 ======*/}
        {/*====== Section 12 ======*/}
  
        {/*====== End - Section 12 ======*/}
      </div>
      {/*====== End - App Content ======*/}
      {/*====== Main Footer ======*/}
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
      {/*====== End - Newsletter Subscribe Modal ======*/}
      {/*====== End - Modal Section ======*/}
    </div>
    {/*====== End - Main App ======*/}
    {/*====== Google Analytics: change UA-XXXXX-Y to be your site's ID ======*/}
  
      <script src="assetes/https://www.google-analytics.com/analytics.js" async defer></script>
  
      <script src="assetes/%PUBLIC_URL%/assetes/js/vendor.js"></script>
  
      <script src="assetes/%PUBLIC_URL%/assetes/js/jquery.shopnav.js"></script>
  
      <script src="assetes/%PUBLIC_URL%/assetes/js/app.js"></script>

  
  </div>

  )
}

export default Home
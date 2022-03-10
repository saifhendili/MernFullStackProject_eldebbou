import React,{Fragment,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {getProduct} from '../../../../actions/product'
import Spinner from '../../../Layout/Spinner';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import { connect } from 'react-redux';
function DetailProduit({getProduct ,product:{product,loading},location}) {

    const { id } = queryString.parse(location.search);
    useEffect(() => {
        getProduct(id);
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

                                <span class="pd-detail__discount">(76% OFF)</span><del class="pd-detail__del">$28.97</del></div>
                        </div>
                        <div class="u-s-m-b-15">
                            <div class="pd-detail__rating gl-rating-style"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>

                                <span class="pd-detail__review u-s-m-l-4">

                                    <a data-click-scroll="#view-review">23 Reviews</a></span></div>
                        </div>
                        <div class="u-s-m-b-15">
                            <div class="pd-detail__inline">

                                <span class="pd-detail__stock">200 in stock</span>

                                <span class="pd-detail__left">Only 2 left</span></div>
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
                            <div class="pd-detail__inline">

                                <span class="pd-detail__click-wrap"><i class="far fa-envelope u-s-m-r-6"></i>

                                    <a href="signin.html">Email me When the price drops</a>

                                    <span class="pd-detail__click-count">(20)</span></span></div>
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

                                        <div class="input-counter">

                                            <span class="input-counter__minus fas fa-minus"></span>

                                            <input class="input-counter__text input-counter--text-primary-style" type="text" value="1" data-min="1" data-max="1000"/>

                                            <span class="input-counter__plus fas fa-plus"></span></div>
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

                                    <a class="nav-link active" data-toggle="tab" href="#pd-desc">DESCRIPTION</a></li>
                                <li class="nav-item">

                                    <a class="nav-link" data-toggle="tab" href="#pd-tag">TAGS</a></li>
                                <li class="nav-item">

                                    <a class="nav-link" id="view-review" data-toggle="tab" href="#pd-rev">REVIEWS

                                        <span>(23)</span></a></li>
                            </ul>
                        </div>
                        <div class="tab-content">

                            <div class="tab-pane fade show active" id="pd-desc">
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
                                    <div class="u-s-m-b-15">
                                        <h4>PRODUCT INFORMATION</h4>
                                    </div>
                                    <div class="u-s-m-b-15">
                                        <div class="pd-table gl-scroll">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Main Material</td>
                                                        <td>Cotton</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Color</td>
                                                        <td>Green, Blue, Red</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sleeves</td>
                                                        <td>Long Sleeve</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Top Fit</td>
                                                        <td>Regular</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Print</td>
                                                        <td>Not Printed</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Neck</td>
                                                        <td>Round Neck</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pieces Count</td>
                                                        <td>1 Piece</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Occasion</td>
                                                        <td>Casual</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shipping Weight (kg)</td>
                                                        <td>0.5</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                            <div class="tab-pane" id="pd-tag">
                                <div class="pd-tab__tag">
                                    <h2 class="u-s-m-b-15">ADD YOUR TAGS</h2>
                                    <div class="u-s-m-b-15">
                                        <form>

                                            <input class="input-text input-text--primary-style" type="text"/>

                                            <button class="btn btn--e-brand-b-2" type="submit">ADD TAGS</button></form>
                                    </div>

                                    <span class="gl-text">Use spaces to separate tags. Use single quotes (') for phrases.</span>
                                </div>
                            </div>
                       
                            <div class="tab-pane" id="pd-rev">
                                <div class="pd-tab__rev">
                                    <div class="u-s-m-b-30">
                                        <div class="pd-tab__rev-score">
                                            <div class="u-s-m-b-8">
                                                <h2>23 Reviews - 4.6 (Overall)</h2>
                                            </div>
                                            <div class="gl-rating-style-2 u-s-m-b-8"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                                            <div class="u-s-m-b-8">
                                                <h4>We want to hear from you!</h4>
                                            </div>

                                            <span class="gl-text">Tell us what you think about this item</span>
                                        </div>
                                    </div>
                                    <div class="u-s-m-b-30">
                                        <form class="pd-tab__rev-f1">
                                            <div class="rev-f1__group">
                                                <div class="u-s-m-b-15">
                                                    <h2>23 Review(s) for Man Ruched Floral Applique Tee</h2>
                                                </div>
                                                <div class="u-s-m-b-15">

                                                    <label for="sort-review"></label><select class="select-box select-box--primary-style" id="sort-review">
                                                        <option selected>Sort by: Best Rating</option>
                                                        <option>Sort by: Worst Rating</option>
                                                    </select></div>
                                            </div>
                                            <div class="rev-f1__review">
                                                <div class="review-o u-s-m-b-15">
                                                    <div class="review-o__info u-s-m-b-8">

                                                        <span class="review-o__name">John Doe</span>

                                                        <span class="review-o__date">27 Feb 2018 10:57:43</span></div>
                                                    <div class="review-o__rating gl-rating-style u-s-m-b-8"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>

                                                        <span>(4)</span></div>
                                                    <p class="review-o__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                                <div class="review-o u-s-m-b-15">
                                                    <div class="review-o__info u-s-m-b-8">

                                                        <span class="review-o__name">John Doe</span>

                                                        <span class="review-o__date">27 Feb 2018 10:57:43</span></div>
                                                    <div class="review-o__rating gl-rating-style u-s-m-b-8"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>

                                                        <span>(4)</span></div>
                                                    <p class="review-o__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                                <div class="review-o u-s-m-b-15">
                                                    <div class="review-o__info u-s-m-b-8">

                                                        <span class="review-o__name">John Doe</span>

                                                        <span class="review-o__date">27 Feb 2018 10:57:43</span></div>
                                                    <div class="review-o__rating gl-rating-style u-s-m-b-8"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>

                                                        <span>(4)</span></div>
                                                    <p class="review-o__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="u-s-m-b-30">
                                        <form class="pd-tab__rev-f2">
                                            <h2 class="u-s-m-b-15">Add a Review</h2>

                                            <span class="gl-text u-s-m-b-15">Your email address will not be published. Required fields are marked *</span>
                                            <div class="u-s-m-b-30">
                                                <div class="rev-f2__table-wrap gl-scroll">
                                                    <table class="rev-f2__table">
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i>

                                                                        <span>(1)</span></div>
                                                                </th>
                                                                <th>
                                                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>

                                                                        <span>(1.5)</span></div>
                                                                </th>
                                                                <th>
                                                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i><i class="fas fa-star"></i>

                                                                        <span>(2)</span></div>
                                                                </th>
                                                                <th>
                                                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>

                                                                        <span>(2.5)</span></div>
                                                                </th>
                                                                <th>
                                                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>

                                                                        <span>(3)</span></div>
                                                                </th>
                                                                <th>
                                                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>

                                                                        <span>(3.5)</span></div>
                                                                </th>
                                                                <th>
                                                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>

                                                                        <span>(4)</span></div>
                                                                </th>
                                                                <th>
                                                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>

                                                                        <span>(4.5)</span></div>
                                                                </th>
                                                                <th>
                                                                    <div class="gl-rating-style-2"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>

                                                                        <span>(5)</span></div>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>

                                                                    <div class="radio-box">

                                                                        <input type="radio" id="star-1" name="rating"/>
                                                                        <div class="radio-box__state radio-box__state--primary">

                                                                            <label class="radio-box__label" for="star-1"></label></div>
                                                                    </div>
                                                                </td>
                                                                <td>

                                                                    <div class="radio-box">

                                                                        <input type="radio" id="star-1.5" name="rating"/>
                                                                        <div class="radio-box__state radio-box__state--primary">

                                                                            <label class="radio-box__label" for="star-1.5"></label></div>
                                                                    </div>
                                                                </td>
                                                                <td>

                                                                    <div class="radio-box">

                                                                        <input type="radio" id="star-2" name="rating"/>
                                                                        <div class="radio-box__state radio-box__state--primary">

                                                                            <label class="radio-box__label" for="star-2"></label></div>
                                                                    </div>
                                                                </td>
                                                                <td>

                                                                    <div class="radio-box">

                                                                        <input type="radio" id="star-2.5" name="rating"/>
                                                                        <div class="radio-box__state radio-box__state--primary">

                                                                            <label class="radio-box__label" for="star-2.5"></label></div>
                                                                    </div>
                                                                </td>
                                                                <td>

                                                                    <div class="radio-box">

                                                                        <input type="radio" id="star-3" name="rating"/>
                                                                        <div class="radio-box__state radio-box__state--primary">

                                                                            <label class="radio-box__label" for="star-3"></label></div>
                                                                    </div>
                                                                </td>
                                                                <td>

                                                                    <div class="radio-box">

                                                                        <input type="radio" id="star-3.5" name="rating"/>
                                                                        <div class="radio-box__state radio-box__state--primary">

                                                                            <label class="radio-box__label" for="star-3.5"></label></div>
                                                                    </div>
                                                                </td>
                                                                <td>

                                                                    <div class="radio-box">

                                                                        <input type="radio" id="star-4" name="rating"/>
                                                                        <div class="radio-box__state radio-box__state--primary">

                                                                            <label class="radio-box__label" for="star-4"></label></div>
                                                                    </div>
                                                                </td>
                                                                <td>

                                                                    <div class="radio-box">

                                                                        <input type="radio" id="star-4.5" name="rating"/>
                                                                        <div class="radio-box__state radio-box__state--primary">

                                                                            <label class="radio-box__label" for="star-4.5"></label></div>
                                                                    </div>
                                                                </td>
                                                                <td>

                                                                    <div class="radio-box">

                                                                        <input type="radio" id="star-5" name="rating"/>
                                                                        <div class="radio-box__state radio-box__state--primary">

                                                                            <label class="radio-box__label" for="star-5"></label></div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="rev-f2__group">
                                                <div class="u-s-m-b-15">

                                                    <label class="gl-label" for="reviewer-text">YOUR REVIEW *</label><textarea class="text-area text-area--primary-style" id="reviewer-text"></textarea></div>
                                                <div>
                                                    <p class="u-s-m-b-30">

                                                        <label class="gl-label" for="reviewer-name">NAME *</label>

                                                        <input class="input-text input-text--primary-style" type="text" id="reviewer-name"/></p>
                                                    <p class="u-s-m-b-30">

                                                        <label class="gl-label" for="reviewer-email">EMAIL *</label>

                                                        <input class="input-text input-text--primary-style" type="text" id="reviewer-email"/></p>
                                                </div>
                                            </div>
                                            <div>

                                                <button class="btn btn--e-brand-shadow" type="submit">SUBMIT</button></div>
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
  };
  const mapStateToProps = (state) => ({
    product: state.product,
  });
    
  export default connect(mapStateToProps, { getProduct })(DetailProduit);

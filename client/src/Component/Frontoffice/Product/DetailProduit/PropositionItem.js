import React from 'react'

function PropositionItem({proposition:{firstname,lastname,image,description,date,price}}) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
    <div className="product-m">
      <div className="product-m__thumb">
        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
          <img className="aspect__img" src={`assetes/image/proposition/${image}`} alt /></a>
        <div className="product-m__quick-look">
          <a className="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look" /></div>
      
      </div>
      <div className="product-m__content">
        <div className="product-m__category">
          <a href="shop-side-version-2.html">{description}</a></div>
        <div className="product-m__name">
          <a href="product-detail.html">{firstname} {lastname}</a></div>
        <div className="product-m__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" /><i className="far fa-star" />
          <span className="product-m__review">(23)</span></div>
          {price>0?   <span class="product-o__price">besh naatik {price} DT</span>:price<0? <span class="product-o__price">besh taa3tini {Math.abs(price)} DT </span>:null}

        
        <div className="product-m__hover">
          <div className="product-m__preview-description">
            <span>{date} .</span></div>
        
        </div>
      </div>
    </div>
  </div> )
}

export default PropositionItem

import React from 'react'

function PropositionItem({proposition:{firstname,lastname,image,text,date,price}}) {
  return (
    <div class="table-p__box">
       <div class="u-s-m-b-30">
                                    <div class="product-o product-o--hover-on">
                                        <div class="product-o__wrap">

                                            <a class="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                <img class="aspect__img" src={`/assetes/image/proposition/${image}`} alt="proposition"/></a>
                                           
                                        </div>

                                        <span class="product-o__category">

                                            <a href="shop-side-version-2.html">{text}</a></span>

                                        <span class="product-o__name">

                                            <a href="product-detail.html">{firstname} {lastname}</a></span>
                                        <div class="product-o__rating gl-rating-style"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>

                                            <span class="product-o__review">(20)</span></div>
{price>0?   <span class="product-o__price">besh naatik {price} DT</span>:price<0? <span class="product-o__price">besh taa3tini {Math.abs(price)} DT </span>:null}
                                      
                                    </div>
                                </div>
</div> )
}

export default PropositionItem
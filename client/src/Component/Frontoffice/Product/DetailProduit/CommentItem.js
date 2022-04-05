import React from 'react'

function CommentItem({comment:{_id,firstname,lastname,text,date}}) {
  return (
     
    <div class="review-o u-s-m-b-15">
    <div class="review-o__info u-s-m-b-8">

        <span class="review-o__name">{firstname} {lastname}</span>

        <span class="review-o__date">{date}</span></div>
    <div class="review-o__rating gl-rating-style u-s-m-b-8"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>

        <span>(4)</span> </div>
    <p class="review-o__text">{text}</p>
</div>
  )
}

export default CommentItem
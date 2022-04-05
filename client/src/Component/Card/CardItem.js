import React from 'react'
import { DeleteFromPanier } from '../../actions/panier'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function CardItem({DeleteFromPanier, auth:{user},product:{_id,name,image,Category,price,product}}) {

    const displaymyfriends = (e,id,price) => {
        user.Total=user.Total-price;
        DeleteFromPanier(id);
      };
 
  return (
    <tr>
    <td>
        <div class="table-p__box">

            <div class="table-p__img-wrap">

                <img class="u-img-fluid" src={`assetes/image/product/${image}`} alt="product"/></div>
            <div class="table-p__info">

                <span class="table-p__name">

                    <a href="product-detail.html">{name}</a></span>

                <span class="table-p__category">

                        <a href="shop-side-version-2.html">{Category}</a></span>
              
            </div>
        </div>
    </td>
    <td>

        <span class="table-p__price">{price}</span></td>
    <td>
        <div class="table-p__input-counter-wrap">

            <div class="input-counter">

                <span class="input-counter__minus fas fa-minus"></span>

                <input class="input-counter__text input-counter--text-primary-style" type="text" value="1" data-min="1" data-max="1000"/>

                <span class="input-counter__plus fas fa-plus"></span></div>
        </div>
    </td>
    <td>
        <div class="table-p__del-wrap">
            <a onClick={(e) => displaymyfriends(e,_id,price)} class="far fa-trash-alt table-p__delete-link" href="#"></a></div>
    </td>
</tr>
  )
}

CardItem.propTypes = {
    auth: PropTypes.object.isRequired,

  };
 

  const mapStateToProps = (state) => ({
    auth:state.auth

  });

export default connect(mapStateToProps, { DeleteFromPanier })( CardItem);

import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";
import {
  removeItemFromCart,
  addItem,
  decreaseItem
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ addItem, clearItem, decreaseItem, cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(removeItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  decreaseItem: item => dispatch(decreaseItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);

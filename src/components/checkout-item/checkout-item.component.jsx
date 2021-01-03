import React from 'react';
import { connect } from 'react-redux';

import { ClearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'; // to bind action here using connect
import './checkout-item.styles.scss';

// here we are passing the cart items as we have to deal with quantity

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => { // this way we have access to the cart item as well as the clear item function
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
      <div className='arrow' onClick = {() => removeItem(cartItem)}> &#10094; </div> 
      <span className='quantity'> {quantity}    </span> 
        <div className='arrow' onClick = {() => addItem(cartItem)}> &#10095; </div>
      </span> 
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};


// code is almost same as the add item code in the collection item
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(ClearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);

// pass this checkoutitem into the checkout page
import React from 'react';
import './cart-dropdown.styles.scss'

import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component'
import CartItem from  '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
// regular stateless component

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );

// cart selector helps us to save the unnecessary rerendering in order to increase the performance
  const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)  // passing the state to the cart selector inorder to get the selected cart items 
  });
  
  export default connect(mapStateToProps)(CartDropdown);
import React from 'react';
import './cart-dropdown.styles.scss'

import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';

import CustomButton from '../custom-button/custom-button.component'
import CartItem from  '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';

// regular stateless component

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        { // iternary operator work as the if else
        cartItems.length ? // if value is greater than 0 then we render the cart items 
        cartItems.map(cartItem => ( <CartItem key={cartItem.id} item={cartItem} />))
        : // if there is not any item
        <span className = 'empty-message' > Your cart is empty </span>
        }
      </div>

      <CustomButton onClick={() => { 
        history.push('/checkout'); 
        dispatch(toggleCartHidden()); 
        }} >GO TO CHECKOUT</CustomButton> 

    </div>
  ); // onClick fires a function that take us to history.push('/checkout')

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
  

// warp the connected function inside of the withRouter, it helps to get the props that we are looking for in this case history
  export default withRouter(connect(mapStateToProps)(CartDropdown));

  // Note: connect actually passes dispatch prop into our component, so we dont need to write here the mapDispatchToProps
  // so simply passes dispatch to the component
import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick = {toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);


//export default CartIcon;

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()) // function that  triggers the dispatch of the toggleCartHidden
});

// here we get our state we destructure our cart from cart we pull off the cart items

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state) });  // here we passing a whole reducer state into the cart selector

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
// its is for as cart items are reuseable 

import { createSelector } from 'reselect';

// function that gets the whole state and returns slice of it which is cart
const selectCart = state =>  state.cart; // input selector

// memoliye selector
// takes two arguments
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems  // return cart items

); 

// we pass in the value of item count which is equal of accumulating quantity of each of our cart items
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
      cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
          accumalatedQuantity + cartItem.quantity,
        0
      )
  );
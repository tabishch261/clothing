import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({  // here there is no payload so we dont pass any parameter
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  });
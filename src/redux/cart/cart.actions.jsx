// Actions have the type and payload value

import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({  // here there is no payload so we dont pass any parameter
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    
  });

  export const addItem = item => ({ // function that get the item that we add to that cartitem array in cart reducer
    type: CartActionTypes.ADD_ITEM,
    payload: item  // payload value will be item that we try to add into cartitems array, config it in collection-item.component

  });
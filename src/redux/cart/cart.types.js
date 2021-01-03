const CartActionTypes = {
    TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    CLEAR_ITEM_FROM_THE_CART: 'CLEAR_ITEM_FROM_THE_CART' 
};

export default CartActionTypes;


// How to add the new action 
  
  // first set the type
  // second set the action 
  // update the reducer (main effort done here e,g in case of clear item here we are filtering array)

  // after that bind the new action into the component after dispatching e.g bind clear action into the checkout-item component
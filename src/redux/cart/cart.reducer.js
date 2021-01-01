import CartActionTypes from './cart.types';
    const INITIAL_STATE = {
        hidden: true,  // we wnt to hide the dropdown when we first comes to website
        cartItems: []  // add the items into the array when ever user click
      };

      const cartReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
          case CartActionTypes.TOGGLE_CART_HIDDEN: // this is string but we make action type for it
            return { 
              ...state,
              hidden: !state.hidden
            };
          case CartActionTypes.ADD_ITEM:
            return {
              ...state,
              cartItems: [...state.cartItems, action.payload] // first we add the existing cart-items then we add the action payload to the end of this array
            }; 
          default:
            return state;
        }
      };
      
      export default cartReducer;
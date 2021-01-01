import CartActionTypes from './cart.types';
    const INITIAL_STATE = {
        hidden: true  // we wnt to hide the dropdown when we first comes to website
      };

      const cartReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
          case CartActionTypes.TOGGLE_CART_HIDDEN: // this is string but we make action type for it
            return { 
              ...state,
              hidden: !state.hidden
            };
          default:
            return state;
        }
      };
      
      export default cartReducer;
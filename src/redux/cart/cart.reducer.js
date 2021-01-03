import CartActionTypes from './cart.types';
import {addItemToCart, removeItemFromCart} from './cart.utils';


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
            return { // whenever the new action comes in we return the new state of our overall cart reducer
              ...state,
              cartItems: addItemToCart(state.cartItems, action.payload) // first we add the existing cart-items plus we add the new items from action payload into this array
            }; 


            case CartActionTypes.REMOVE_ITEM:
              return { 
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload) // go to cart utils and write function that will change the quantity and remove the cart item if quantity turn to zero
              }; 

            case CartActionTypes.CLEAR_ITEM_FROM_THE_CART:
              return { 
                ...state,
                cartItems: state.cartItems.filter(
                  cartItem => cartItem.id != action.payload.id)  // filter the existing cart items array, we keep the items dosnt match the item that we want to remove
                  
              }; 

          default:
            return state;
        }
      };
      
      export default cartReducer;
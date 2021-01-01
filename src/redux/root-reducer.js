

  // Root reducer represent all the states of  our application
import { combineReducers } from 'redux'; // used to combine all reducers together to turn into one giant object

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer, // key like user represents the slicies of state, as key user goes to userReducer
  cart: cartReducer
});
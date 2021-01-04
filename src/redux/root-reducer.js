

  // Root reducer represent all the states of  our application
import { combineReducers } from 'redux'; // used to combine all reducers together to turn into one giant object

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // this the actual way to get the local storage object for our window browser

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] //"user" is handled by the firebase authentication so there is no need to actually persist "user" so we persist just the "cart"
};// the only reducer that we actually want to persist is the cart 

const rootReducer = combineReducers({ // write like that bcz we have to wrap this in new reducer (persist-reducer) call
  user: userReducer, // key like user represents the slicies of state, as key user goes to userReducer
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
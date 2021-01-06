  
//import SHOP_DATA from './shop.data'; // as data is stored in the database so we dont need shop data any mor e

import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  //collections: SHOP_DATA  // collections points to the data that we have stored in the shop.data.js
  collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {  // as there are no modification or actions availaible like direcrory, so we have just default
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload, // reducer listening the backend updates to store the actual collections value
      };
    
    default:
      return state;
  }
};

export default shopReducer;

// 1. Create Shop Reducer
// 2. set it in root reducer
// 3. Create the shop selector
// 4. set the shop component file accordingly

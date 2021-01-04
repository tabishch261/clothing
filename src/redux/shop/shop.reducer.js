  
import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA  // collections points to the data that we have stored in the shop.data.js
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {  // as there are no modification or actions availaible like direcrory, so we have just default
    default:
      return state;
  }
};

export default shopReducer;

// 1. Create Shop Reducer
// 2. set it in root reducer
// 3. Create the shop selector
// 4. set the shop component file accordingly

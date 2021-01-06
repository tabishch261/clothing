import ShopActionTypes from './shop.types';


// this function will take the collections map return the object with given type and payload
export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
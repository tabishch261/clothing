

  import { createSelector } from 'reselect';

  const selectShop = state => state.shop; // initial input selector which gets the state and returns the state.shop
  
  export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
  );
  
  export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections =>
      collections ? Object.keys(collections).map(key => collections[key]) : [] // that helps to get the keys of the selection, map over the array of collections so that we get the value of that key 
  );
  
  export const selectCollection = collectionUrlParam =>
    createSelector(
      [selectCollections],
      collections => (collections ? collections[collectionUrlParam] : null) // pass it to the collection page component
    );


// 1. url passed into the selector
// 2. Selector goes into the collections object and gets the corresponsing value based on the property like jacket
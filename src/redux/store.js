

  import { createStore, applyMiddleware } from 'redux'; // middle ware receive actions then do something with them and then pass them out to the root reducer
import logger from 'redux-logger'; // make us easier to understand what we did

import { persistStore } from 'redux-persist'; // this allows browser to cache the store now

import rootReducer from './root-reducer';
// this configuration can be viewed on redux documentation as well
// what ever we add to middleware we add to the array

const middlewares = [logger];
// this will spread in all the values and methods of middlewares array into the applyMiddleware func as individual arguments 
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore( store); // we are creating presisted version of our store using this presistor object

//export default { store, persistor} ;// pass it to index.js file
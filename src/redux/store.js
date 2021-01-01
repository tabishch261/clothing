

  import { createStore, applyMiddleware } from 'redux'; // middle ware receive actions then do something with them and then pass them out to the root reducer
import logger from 'redux-logger'; // make us easier to understand what we did

import rootReducer from './root-reducer';
// this configuration can be viewed on redux documentation as well
// what ever we add to middleware we add to the array

const middlewares = [logger];
// this will spread in all the values and methods of middlewares array into the applyMiddleware func as individual arguments 
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;// pass it to index.js file
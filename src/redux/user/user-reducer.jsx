
import { UserActionTypes } from './user.types';
// initial state is empty as its the start
    const INITIAL_STATE = {
        currentUser: null
      };
    // userReducer is the function that takes two parameters state ( which set to initial if it dosnt change, like default) and action
// Reducer gets every single action that gets fired
      const userReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) { // switch is nothing but the big if statement
          case UserActionTypes.SET_CURRENT_USER:// Whenever 'SET_CURRENT_USER' user is the action type that gets fired, we return every thing else
            return { //  - on the state , and we set the value which is nothing but the payload 
              ...state,
              currentUser: action.payload
            };
          default:
            return state; // if action type is not as we want it returns the default
        }
      };
      
      export default userReducer;
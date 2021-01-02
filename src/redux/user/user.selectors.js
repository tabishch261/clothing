import { createSelector } from 'reselect';

// function that gets the whole state and returns slice of it which is user
const selectUser = state =>  state.user; // input selector


// memoliye selector
// takes two arguments
export const selectCurrentUser = createSelector(
    [selectUser], // 1st argument is the array of the input selector
    user => user.currentUser  // last argument get the return of input selector

); 


import {UserActionTypes} from './user.types';

// function that gets user but returns action object, it  should be in the format that action expect to be
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
  });
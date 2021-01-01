

// function that gets user but returns action object, it  should be in the format that action expect to be
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
  });
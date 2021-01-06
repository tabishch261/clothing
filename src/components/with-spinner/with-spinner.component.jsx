import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// So this way from higher component like withspinner we are getting back our spinner component 

// make a functional component that take some wrapped component and then that wrapped component then passed into this new function ({ isLoading, ...otherProps }) ...
const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} /> // if is loading is false then return the wrapped component as we passed 
    );
  };
  return Spinner;
};

export default WithSpinner;
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


// this functional component take in the price 
const StripeCheckoutButton = ({ price }) => {  // this price comes from cart-selector > checkout-component
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I5v3bEobcg4QMsc77pc1XGY8GpadUGFXawtScxt35gdqMhAzD7jOAfTBq54So8md6CApqoUO31RwToUcvvMLGbT00dTtz8cdL';


  // Token helps to pass the payment to the backend - it helps to process the payments
  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!'); //  As we dont have to process the payment, so we set just alert here
  };

  return (  // go through the react-stripe-checkout repository in order to know the details of below given features
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`} // its beacuse we want user to see the physical dollar value  
      amount={priceForStripe} // value passed would be converted one
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

// After creating this import into the checkout component
// set the it in checout component accordingly
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './checkout.styles.scss';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CartItem from '../../components/cart-item/cart-item.component';
import  CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


// create a normal functional component

const CheckoutPage = ({cartItems, total}) => (

    <div className = 'checkout-page'>
        <div className = 'checkout-header'>
            <div className = 'header-block'>
                <span> Product </span>
            </div>
            <div className = 'header-block'>
                <span> Discription </span>
            </div>
            <div className = 'header-block'>
                <span> Quantity </span>
            </div>
            <div className = 'header-block'>
                <span> Remove </span>
            </div> 
        </div>

            {cartItems.map(cartItem => (<CheckoutItem key= {cartItem.id} cartItem = {cartItem} />))} 

            <div className='total'>TOTAL: ${total}</div>
            <div className='test-warning'> *Please use the following test credit card for payments* <br /> 
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123 </div>
            <StripeCheckoutButton price = {total} /> 
        </div>
    );
    
    // render checoutitem and pass the cart item in as prop

    
    const mapStateToProps = createStructuredSelector({
        cartItems: selectCartItems,
        total: selectCartTotal  // selector that add all the price of the selected items 
      });
      
      export default connect(mapStateToProps)(CheckoutPage);

// 1. put that page into app js to set the route
// 2. after that goes to the cart-dropdown component, here wrap the connect with the withRouter that helps to bring to this page when 
// user click on the Go to check 
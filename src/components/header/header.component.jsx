import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom'; 
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils'; 
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { connect } from  'react-redux'; // connect is the higher order component that let our component to have access things related to redux

const Header = ({ currentUser, hidden }) => (

    <div className = 'header'>
        <Link className= 'logo-container' to='/'> <Logo className='logo' /> </Link>
            <div className = 'options'>
                <Link className='option' to= '/shop'> Shop </Link>
                <Link className='option' to= '/shop'> Contact </Link>
                {
                  currentUser?
                  (<div className = 'option' onClick={() => auth.signOut()} > Sign Out </div>)
                  :  
                  (<Link className = 'option' to='/signin'> Sign In </Link>)
                }

            <CartIcon />
            </div >
            { hidden ? null : <CartDropDown/>}
    </div>

);

// the state is the root reducer

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});


// here we pass the two functions the 2nd one will be the optional
// connect is the function that allows us to access the state

// now we are getting value of the currentuser from reducer being passed to currentuser here
// Connect we use any where we need properties from our reducers
export default connect(mapStateToProps)(Header);
import React from 'react';
// import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils'; 
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { connect } from  'react-redux'; // connect is the higher order component that let our component to have access things related to redux

import { createStructuredSelector} from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {  selectCartHidden } from '../../redux/cart/cart.selectors';

import{ HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (

    <HeaderContainer>
        <LogoContainer  to='/'> <Logo className='logo' /> </LogoContainer>
            <OptionsContainer >
                <OptionLink  to= '/shop'> Shop </OptionLink>
                <OptionLink  to= '/shop'> Contact </OptionLink>
                {
                  currentUser?
                  (<OptionLink as='div' onClick={() => auth.signOut()} > Sign Out </OptionLink>)
                  :  
                  (<OptionLink  to='/signin'> Sign In </OptionLink>)
                }

            <CartIcon />
            </OptionsContainer >
            { hidden ? null : <CartDropDown/>}
    </HeaderContainer>

);

// the state is the root reducer

// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// });

// CreatestructuredSelector will automatically pass our top level state that we get as our mapstatetoprop into each subsequent selector

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

// here we pass the two functions the 2nd one will be the optional
// connect is the function that allows us to access the state

// now we are getting value of the currentuser from reducer being passed to currentuser here
// Connect we use any where we need properties from our reducers
export default connect(mapStateToProps)(Header);
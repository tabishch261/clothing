import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom'; 
import { ReactComponent as Logo } from '../../assets/crown.svg';



const Header = () => (

    <div className = 'header'>
        <Link className= 'logo-container' to='/'> <Logo className='logo' /> </Link>
            <div className = 'Options'>
                <Link className='Option' to= '/shop'> Shop </Link>
                <Link className='Option' to= '/shop'> Contact </Link>
            </div >
    </div>

);

export default Header;
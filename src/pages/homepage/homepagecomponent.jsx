import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

// Funtional Component

const HomePage = () => (
// first add the outside of the container which is home page
// then add 2 container we are talking about container of the menu and then the actual 
// -menu items 
// inside the menu item there is another content container

// here we can pass the prop history into our directory, then pass that history into our menu item
<div className = 'HomePage'>
    <Directory/>
</div>

);

export default HomePage;
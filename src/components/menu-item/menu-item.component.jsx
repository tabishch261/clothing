import React from 'react';

import {withRouter} from 'react-router-dom';
// with router is the higher order component that takes the component as an argument and turns into the modified component
import './menu-item.styles.scss'; 
// Funtional Component

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl}) => (

    <div className = {`${size} menu-item`} onClick = {() => history.push(`${match.url}${linkUrl}`)}>
    <div className = 'background-image' style = {{ backgroundImage: `url(${imageUrl})`}} />

    <div className = 'content'>
            <h1 className = 'title'> {title.toUpperCase()} </h1>
            <span className = 'subtitle'>Shop now</span>
    </div>
    </div>

);

// we pass our menu item into the with router, the menu router will return us same name super powered component
// with access to the location match and history props that we need access to 
export default withRouter(MenuItem);
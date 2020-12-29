import React from 'react';


// Funtional Component

const HomePage = () => (
// first add the outside of the container which is home page
// then add 2 container we are talking about container of the menu and then the actual 
// -menu items 
// inside the menu item there is another content container
<div className = 'HomePage'>
    <div className = 'directory-menu'>
        <div className = 'menu-item'>
            <div className = 'content'>
                <div className = 'menu-item'>
                    <h1 className = 'title'> Hats </h1>
                    <span className = 'subtitle'>Shop now</span>
                </div>
            </div>
        </div>
        
        <div className = 'menu-item'>
            <div className = 'content'>
                <div className = 'menu-item'>
                    <h1 className = 'title'> Jackets </h1>
                    <span className = 'subtitle'>Shop now</span>
                </div>
            </div>
        </div>

        <div className = 'menu-item'>
            <div className = 'content'>
                <div className = 'menu-item'>
                    <h1 className = 'title'> Sneakers </h1>
                    <span className = 'subtitle'>Shop now</span>
                </div>
            </div>
        </div>

        <div className = 'menu-item'>
            <div className = 'content'>
                <div className = 'menu-item'>
                    <h1 className = 'title'> Womens </h1>
                    <span className = 'subtitle'>Shop now</span>
                </div>
            </div>
        </div>

        <div className = 'menu-item'>
            <div className = 'content'>
                <div className = 'menu-item'>
                    <h1 className = 'title'> Mens </h1>
                    <span className = 'subtitle'>Shop now</span>
                </div>
            </div>
        </div>

    </div>
</div>

);

export default HomePage;
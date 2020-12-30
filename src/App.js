import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepagecomponent';
import './pages/homepage/homepage.styles.scss';
import { Switch, Route, Link }  from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';


// <Link to = '/'> HomePage </Link>   link helps me to take to the specific page, like this take me to the home page if i define in Hatspage

// const Hatspage = () => (
//   <div>
  
//   <h1>Hats Page</h1>
//   </div>
// );



// Route has certain parameters like exact, path and component^
// exact helps you to render the exact path

// Switch provides more component to the routing
function App() {
  return (
    
    <div>
      <Switch> 

        <Route exact path='/' component= {HomePage} />
        <Route path='/shop' component= {ShopPage} />


      </Switch>
    </div>
  );
}

export default App;

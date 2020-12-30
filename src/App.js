import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepagecomponent';
import './pages/homepage/homepage.styles.scss';
import { Switch, Route, Link }  from 'react-router-dom';



// <Link to = '/'> HomePage </Link>   link helps me to take to the specific page, like this take me to the home page if i define in Hatspage
const Hatspage = () => (
  <div>
  
  <h1>Hats Page</h1>
  </div>
);

const Jacketspage = () => (
  <div>
  
  <h1>Jackets Page</h1>
  </div>
);

const Sneakerspage = () => (
  <div>
  
  <h1>Sneakers Page</h1>
  </div>
);

const Menspage = () => (
  <div>
  
  <h1>Mens Page</h1>
  </div>
);

const Womenspage = () => (
  <div>
  
  <h1>Womens Page</h1>
  </div>
);

// Route has certain parameters like exact, path and component^
// exact helps you to render the exact path

// Switch provides more component to the routing
function App() {
  return (
    
    <div>
      <Switch> 

        <Route exact path='/' component= {HomePage} />
        <Route path='/shop/hats' component= {Hatspage} />
        <Route path='/shop/jackets' component= {Jacketspage} />
        <Route path='/shop/sneakers' component= {Sneakerspage} />
        <Route path='/shop/mens' component= {Menspage} />
        <Route path='/shop/womens' component= {Womenspage} />

      </Switch>
    </div>
  );
}

export default App;

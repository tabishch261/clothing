



import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepagecomponent';
import './pages/homepage/homepage.styles.scss';
import { Switch, Route, Link }  from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'


import { auth, createUserProfileDocument } from './firebase/firebase.utils'; // used to authenticate user that logged in

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
// componentDidMount () is an open subscription we also require the close subscription to avoid the leakage
  unsubscribeFromAuth = null;
// how we fetch data before, which is used to fire a fetch data to the backend
// its like when some body signs in and signs out we want to aware that somebody signs in 
  componentDidMount() {
      // this.setState({currentUser: user});
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();// that will close the subscription
  }
// Route has certain parameters like exact, path and component^
// exact helps you to render the exact path
// Switch provides more component to the routing
  render() {
    //function App() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
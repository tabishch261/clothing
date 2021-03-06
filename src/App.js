
import React from 'react';
import './App.css';


import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import HomePage from './pages/homepage/homepagecomponent';
import './pages/homepage/homepage.styles.scss';
import CheckoutPage from './pages/checkout/checkout.component';

import { Switch, Route, Link , Redirect}  from 'react-router-dom';

import { setCurrentUser } from './redux/user/user.actions'
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector} from 'reselect';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'; // used to authenticate user that logged in



class App extends React.Component {


// componentDidMount () is an open subscription we also require the close subscription to avoid the leakage
  unsubscribeFromAuth = null;
// how we fetch data before, which is used to fire a fetch data to the backend
// its like when some body signs in and signs out we want to aware that somebody signs in 
  componentDidMount() {
    const { setCurrentUser } = this.props;

      // this.setState({currentUser: user});
      // When authentication changes means when somebody login, the authentication will 
      //- store that user information and it will assign the user id (UID), 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); // userauth object is used to querry the database (go to firebase utils)

        userRef.onSnapshot(snapShot => { // when ever the snap shot changes like set value, updated or deleted the value it pass the snapshot into the listener
          setCurrentUser({ // it used to set the actual current user object in the redux creater 
          
              id: snapShot.id,
              ...snapShot.data()
            
          });
        });
      }

      setCurrentUser(userAuth);
     // addCollectionAndDocuments('collections', collectionsArray.map( ({title, items}) => ({title, items}) )); // passing collection array to add it to the database
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
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/signin' render={ () => this.props.currentUser ? (< Redirect to= '/'/>) : (<SignInAndSignUpPage/>) } /> 
        </Switch>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({ 

  // setCurrentUser goes to the function that gets the user object, then calls dispatch which dispath the action object
  // dispatch get the action object that i pass to root reducer
    setCurrentUser: user => dispatch(setCurrentUser(user))
  
  }); 

// CreatestructuredSelector will automatically pass our top level state that we get as our mapstatetoprop into each subsequent selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
 // collectionsArray: selectCollectionsForPreview // once dataset is loaded there is no reason to keep code

});



// we pass 1st argument as null if we dont need any state to props from our reducer to currentuser here
// The 2n d argument is the mapDispatchToProps

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
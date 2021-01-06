import React from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component'
import  CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import { updateCollections } from '../../redux/shop/shop.actions';
import   WithSpinner from '../../components/with-spinner/with-spinner.component';


import {
    firestore,
    convertCollectionsSnapshotToMap,
  } from '../../firebase/firebase.utils.js';


  const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
  const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// we have to set state here as collection preview and collection overview are the child components of shop
class ShopPage extends React.Component {

    state = {
      loading: true  // other way rather than using the constructor
    };


    unsubscribeFromSnapshot = null; // snapshot representation of our collection arr that we get from the firebase
  
    // componentDidMount is use to fetch the collection arr from the fire base

    componentDidMount() {
      const { updateCollections } = this.props;
      const collectionRef = firestore.collection('collections'); // collections is the name of collections inside our firestore    
  
      collectionRef.get().then((snapshot) => { // means whenever the snapshot update it will send us the new snapshot when code renders
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);  // when snapshot comes back and here we update our reducer - at that moment shop page is good to render the collection object
        this.setState({ loading: false });
      });
    }
  // app js pass objects to component as props (match, location and history)
// to see what match actually give us back - So match is /shop
    render() {
      const { match } = this.props;
      const { loading } = this.state;

      return (
        <div className='shop-page'>
          <Route exact path={`${match.path}`} render = {(props) => <CollectionsOverviewWithSpinner isLoading = {loading} {...props} /> }  />
          <Route
            path={`${match.path}/:collectionId`}
            render = {(props) => <CollectionsOverviewWithSpinner isLoading = {loading} {...props} /> } 
          />
        </div>
      );
    }
  }


  const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) => 
      dispatch(updateCollections(collectionsMap)),
  });
  
  export default connect(null, mapDispatchToProps)(ShopPage);

  // used to transform our array into the map and update out shop redux file to be able to update and store this collection
import React from 'react';
   
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component'
import  CollectionsOverview from '../../components/collections-overview/collections-overview.component';

// app js pass objects to component as props (match, location and history)
const ShopPage =  ({match }) => {
    console.log(match);  // to see what match actually give us back - So match is /shop
    return(

    <div className = 'shop-page'> 
    
        <Route exact path = { `${match.path}` } component = {CollectionsOverview} />
        <Route  path = { `${match.path}/:collectionId` } component = {CollectionPage} />
    </div>
)};



  export default ShopPage;
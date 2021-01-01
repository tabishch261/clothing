import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import './collection-item.styles.scss';

import {connect} from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';


const CollectionItem = ({ item, addItem }) => { 

const {id, name, price, imageUrl} = item; // we destructure it beacuse we not only have to use the items but also the item contain features
return (
    <div className = 'collection-item'>
    <div className = 'image' style = {{ backgroundImage: `url(${imageUrl})`}} />

    <div className = 'collection-footer'>
            
            <span className = 'name'>{name}</span>
            <span className = 'price'>{price}</span>
    </div>
    <CustomButton onClick = {() => addItem(item)} inverted> Add to cart </CustomButton>
    </div>

)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)) // to dispatch new add item, when ever there is add item it get an item
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(CollectionItem);
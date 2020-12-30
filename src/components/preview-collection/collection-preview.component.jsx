import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-items/collection-item.component';
// Funtional Component

const CollectionPreview = ({ title, items }) => (

<div className = 'collection-preview'>
    <h1 className = 'title'>{title.toUpperCase()}</h1>
    <div className = 'preview'>
        {items
        .filter((item, idx) => idx < 4)
        .map( ({id, ...OtherItemsProps}) => (<CollectionItem key = {id} {...OtherItemsProps}/>))
        }

    </div>
</div>

);

export default CollectionPreview;
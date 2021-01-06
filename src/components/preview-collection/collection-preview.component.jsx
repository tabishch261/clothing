import React from 'react';

//import './collection-preview.styles.scss';

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
  } from './preview-collection.styles';

import CollectionItem from '../collection-items/collection-item.component';
// Funtional Component

const CollectionPreview = ({ title, items }) => (

<CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
        {items
        .filter((item, idx) => idx < 4)
        .map( (item) => (<CollectionItem key = {item.id} item = {item} />)) // Here we are passsing the item id and complete item to the collection item
        }

    </PreviewContainer>
</CollectionPreviewContainer>

);

export default CollectionPreview;
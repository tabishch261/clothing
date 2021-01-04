import React from 'react';

import  {connect} from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

import { createStructuredSelector } from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';

// here we pull the sections of props that we get in from the directory reducer
const Directory = ( {sections} ) => (

      
        // <div className = 'directory-menu'>
        //     {// Want to map through our sections, And we want to pass sections into our menu items so tha
        //     // it will create our menu item, 
        //         this.state.sections.map( ({ title, imageUrl, id, size, linkUrl}) => ( <MenuItem key = {id} title = {title} imageUrl = {imageUrl} size = {size} linkUrl = {linkUrl} /> ))                            
        //     }
        // </div>

        <div className = 'directory-menu'>
            {// Want to map through our sections, And we want to pass sections into our menu items so tha
            // it will create our menu item, 
              sections.map( ( {id, ...otherSectionProps}) => ( <MenuItem key = {id} {...otherSectionProps} /> ))     

            }
        </div>


        );


        const mapStateToProps = createStructuredSelector({
          sections: selectDirectorySections //  selectDirectorySections we set in the directory selectors
        });
        
        export default connect(mapStateToProps)(Directory);
import React from 'react';
//import './custom-button.styles.scss';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({children, ...props}) => (
// all other props pass to the custom-botton.styles.jsx file
    <CustomButtonContainer {...props}>   
        {children}
    </CustomButtonContainer>

);

export default CustomButton;
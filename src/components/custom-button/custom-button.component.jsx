import React from 'react';

import './custom-button.styles.scss';


const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {

    const classes = () => {
        const array = [];

        if(isGoogleSignIn)
            array.push('google-sign-in');
        if(inverted)
            array.push('inverted');
        
        return array.join(' ');
    }

    return(
        <button className={`custom-button ${classes()}`} {...otherProps}>
            {children}
        </button>
    );
    
};

export default CustomButton;
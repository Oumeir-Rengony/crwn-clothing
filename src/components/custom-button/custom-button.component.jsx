import React from 'react';
import styled from 'styled-components';


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
            <StyledButton className={`${classes()}`} 
                isGoogleSignIn={isGoogleSignIn} 
                inverted={inverted}
                {...otherProps}
            >
                {children}
            </StyledButton>
    );
    
};

const invertedCss = `
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover{
        background-color: black;
        color: white;
        border: none;
    }
`;

const googleSigninCss = `
    
    background-color: #4285f4;
    color:white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
    
`;

const StyledButton = styled.button`
   
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display:flex;
    justify-content: center;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }

    ${({isGoogleSignIn}) => isGoogleSignIn? googleSigninCss : null}

    ${({inverted}) => inverted? invertedCss : null}
  
`;

export default CustomButton;
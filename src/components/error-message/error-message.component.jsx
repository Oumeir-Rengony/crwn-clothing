import React from 'react';
import styled from 'styled-components';

import ErrorImage from '.././../assets/404.jpg';


const ErrorMessage = ({error}) => {
    return(
        <StyledErrorOverlay>
            <div className="error-image-container" style={{backgroundImage: `url(${ErrorImage})`}}>
                <h2 className="error-text">{error}</h2>
            </div>
        </StyledErrorOverlay>
    );
};

const StyledErrorOverlay = styled.div`

    position: relative;
    height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
  
    .error-image-container {
        display: inline-block;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 80vh;
        height: 80vh;
  
        @media screen and (max-width: 600px) {
            width: 80vw;
            background-size: contain;
        }
    }
  
    .error-text {
        position: absolute;
        bottom: -75px;
        right:50%;
        transform: translateX(50%);
        font-size: 28px;
        color: #2f8e89;
    
        @media screen and (max-width: 480px) {
            bottom: -40px;
            font-size: 24px;
        }
    }
  
`;

export default ErrorMessage;
import React from 'react';

import ErrorImage from '.././../assets/404.jpg';

import './error-message.styles.scss';

const ErrorMessage = ({error}) => {
    return(
        <div className="error-overlay">
            <div className="error-image-container" style={{backgroundImage: `url(${ErrorImage})`}}>
                <h2 className="error-text">{error}</h2>
            </div>
        </div>
    );
};

export default ErrorMessage;
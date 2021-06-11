import React from 'react';
import Spinner from '../spinner.component'

const withSpinner = (WrappedComponent) => {

    return ({isLoading, ...otherProps}) => {

        return isLoading
            ? (
                <Spinner />
            )
            : (
                <WrappedComponent {...otherProps} />
            );
    };
};


export default withSpinner;
import React from 'react';

import ErrorMessage from '../error-message/error-message.component';

//ErrorBoundary only works as class components
class ErrorBoundary extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            hasErrored: false
        };
    }

    static getDerivedStateFromError(error){
        return {hasErrored: true};
    }

    componentDidCatch(error, info){
        console.log(error);
    }

    render(){
        if(this.state.hasErrored){
            return <ErrorMessage error="Sorry, page is broken"/>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
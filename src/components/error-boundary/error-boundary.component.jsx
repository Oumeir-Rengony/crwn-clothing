import React from 'react';
import ErrorImage from '.././../assets/404.jpg';
import './error-boundary.styles.scss';

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
            return (
                <div className="error-overlay">
                    <div className="error-image-container" style={{backgroundImage: `url(${ErrorImage})`}}>
                        <h2 className="error-text">Sorry, page is broken</h2>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
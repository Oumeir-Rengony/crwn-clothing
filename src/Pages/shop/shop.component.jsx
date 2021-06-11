import React, {lazy, Suspense} from 'react';

import {Route, useRouteMatch} from 'react-router-dom';

import Spinner from '../../components/spinner/spinner.component';
import ErrorBoundary from '../../components/error-boundary/error-boundary.component';
import ErrorMessage from '../../components/error-message/error-message.component';

const CollectionsOverview = lazy(() => import('../../components/collections-overview/collections-overview.component'));
const CollectionPage = lazy(() => import('../../Pages/collection/collection.component'));


const ShopPage = () => {

    //react-router hooks
    const match = useRouteMatch();

    return (
        <div className="shop-page">
            <ErrorBoundary>
                <Suspense fallback={<Spinner/>}>
                    <Route path={`${match.path}`} exact>
                        <CollectionsOverview />
                    </Route>

                    <Route path={`${match.path}/:collectionId`} >
                        <CollectionPage/>
                    </Route>
                    <Route path="*">
                        <ErrorMessage error="Sorry, page not found" />
                    </Route>
                </Suspense>
            </ErrorBoundary>
            
        </div>
    );
};

export default ShopPage;
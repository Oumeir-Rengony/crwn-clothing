import React from 'react';

import {Route, useRouteMatch} from 'react-router-dom';

import CollectionPage from '../collection/collection.components';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = () => {

    const match = useRouteMatch();
    
    return (
        <div className="shop-page">
            <Route path={`${match.path}`} exact>
                <CollectionOverview />
            </Route>

            <Route path={`${match.path}/:collectionId`} >
                <CollectionPage />
            </Route>
            
        </div>
    )
}

export default ShopPage;
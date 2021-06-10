import React from 'react';

import {Route, useRouteMatch} from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../Pages/collection/collection.component';


const ShopPage = () => {

    //react-router hooks
    const match = useRouteMatch();

    return (
        <div className="shop-page">
            <Route path={`${match.path}`} exact>
                <CollectionsOverview />
            </Route>

            <Route path={`${match.path}/:collectionId`} >
                <CollectionPage/>
            </Route>
            
        </div>
    );
};

export default ShopPage;
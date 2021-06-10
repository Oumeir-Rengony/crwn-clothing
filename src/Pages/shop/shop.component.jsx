import React from 'react';

import {Route, useRouteMatch} from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../../Pages/collection/collection.container';


const ShopPage = () => {

    //react-router hooks
    const match = useRouteMatch();

    return (
        <div className="shop-page">
            <Route path={`${match.path}`} exact>
                <CollectionsOverviewContainer />
            </Route>

            <Route path={`${match.path}/:collectionId`} >
                <CollectionPageContainer/>
            </Route>
            
        </div>
    );
};

export default ShopPage;
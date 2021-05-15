import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';

import {Route, useRouteMatch} from 'react-router-dom';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from '../collection/collection.components';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';



//Wrapping component with a Loading animation
const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = () => {

    //react-router hooks
    const match = useRouteMatch();

    //DISPATCH
    const dispatch = useDispatch();
    
    const isCollectionFetched = useSelector(selectIsCollectionFetching);
    const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded);

    useEffect(()=> {
        dispatch(fetchCollectionsStartAsync());
    }, [dispatch]);
    
    return (
        <div className="shop-page">
            <Route path={`${match.path}`} exact>
                <CollectionsOverviewWithSpinner isLoading={isCollectionFetched}/>
            </Route>

            <Route path={`${match.path}/:collectionId`} >
                <CollectionsPageWithSpinner isLoading={!isCollectionsLoaded}/>
            </Route>
            
        </div>
    );
};

export default ShopPage;
import React, {useEffect, useState} from 'react';

import {useDispatch} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';

import {Route, useRouteMatch} from 'react-router-dom';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from '../collection/collection.components';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase-utils';


//Wrapping component with a Loading animation
const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = () => {

    const [isLoading, setIsLoading] = useState(true);

    const match = useRouteMatch();

    const dispatch = useDispatch();

    useEffect(()=> {
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(updateCollections(collectionsMap));
            setIsLoading(false);
        });
        
    }, [dispatch]);
    
    return (
        <div className="shop-page">
            <Route path={`${match.path}`} exact>
                <CollectionsOverviewWithSpinner isLoading={isLoading}/>
            </Route>

            <Route path={`${match.path}/:collectionId`} >
                <CollectionsPageWithSpinner isLoading={isLoading}/>
            </Route>
            
        </div>
    );
};

export default ShopPage;
import React, {useContext} from 'react';

import {CollectionsContext} from '../../context/collections/collections.provider';

import {useParams} from 'react-router-dom';

import WithSpinner from '../../components/spinner/with-spinner/with-spinner.component';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = () => {

    const {collectionId: collectionUrlParam} = useParams();

    const {collections} = useContext(CollectionsContext);
    
    const collection = collections[collectionUrlParam];
    const {title, items} = collection;

    return(
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default WithSpinner(CollectionPage);
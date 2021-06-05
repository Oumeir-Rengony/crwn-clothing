import React, { useContext } from 'react';

import { CollectionsContext } from '../../provider/collections/collections.provider';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {

    const {collections: collectionsMap} = useContext(CollectionsContext);
    const collections = Object.keys(collectionsMap).map(key => collectionsMap[key])
    
    return(
        <div className="collections-overview">
            {
                collections.map(({id, ...otherCollectionsProps}) => (
                    <CollectionPreview key={id} {...otherCollectionsProps} />
                ))
            }
        </div>
        
    );
};

export default CollectionsOverview;
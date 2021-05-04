import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import collections from './shop.data';

const ShopPage = () => {
    
    return (

        <div>
            {
                collections.map(({id, ...otherCollectionsProps}) => (
                    <CollectionPreview key={id} {...otherCollectionsProps} />
                ))
            }
        </div>
    )
}

export default ShopPage;
import React, { useContext } from 'react';

import { CollectionsContext } from '../../context/collections/collections.provider';

import WithSpinner from '../spinner/with-spinner/with-spinner.component';
import CollectionPreview from '../collection-preview/collection-preview.component';

import styled from 'styled-components';

const CollectionsOverview = () => {

    const {collections: collectionsMap} = useContext(CollectionsContext);
    const collections = Object.keys(collectionsMap).map(key => collectionsMap[key])
    
    return(
        <StyledCollectionOverviewWrapper>
            {
                collections.map(({id, ...otherCollectionsProps}) => (
                    <CollectionPreview key={id} {...otherCollectionsProps} />
                ))
            }
        </StyledCollectionOverviewWrapper>
        
    );
};

const StyledCollectionOverviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export default WithSpinner(CollectionsOverview);
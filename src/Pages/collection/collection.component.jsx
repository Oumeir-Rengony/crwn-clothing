import React, {useContext} from 'react';

import {CollectionsContext} from '../../context/collections/collections.provider';

import {useParams} from 'react-router-dom';

import WithSpinner from '../../components/spinner/with-spinner/with-spinner.component';
import CollectionItem from '../../components/collection-item/collection-item.component';

import styled from 'styled-components';

const CollectionPage = () => {

    const {collectionId: collectionUrlParam} = useParams();

    const {collections} = useContext(CollectionsContext);
    
    const collection = collections[collectionUrlParam];
    const {title, items} = collection;

    return(
        <StyledCollectionWrapper>
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </StyledCollectionWrapper>
    );
};

const StyledCollectionWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
  
    .title {
        font-size: 38px;
        margin: 0 auto 30px;
    }
  
    .items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
  
        & .collection-item {
            margin-bottom: 30px;
        }

        @media screen and (max-width: 800px) {
            grid-template-columns: 1fr 1fr;
            grid-gap: 15px;
        }
    }
`;

export default WithSpinner(CollectionPage);
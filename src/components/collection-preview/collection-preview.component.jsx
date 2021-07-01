import React from 'react'
import styled from 'styled-components';

import CollectionItem from '../collection-item/collection-item.component';


const CollectionPreview = ({title, items}) => (

    <StyledCollectionPreview>
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                    .filter((_item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </div>
    </StyledCollectionPreview>
);

const StyledCollectionPreview = styled.div`

    display: flex;
    flex-direction: column;
    margin: 30px;

    @media screen and (max-width: 800px) {
        align-items: center;
    }

    .title {
        font-size: 28px;
        margin-bottom: 25px;
        cursor: pointer;

        &:hover {
            color: grey;
        }

    }
  
    .preview {
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 800px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 15px;
        }
    }
  
`;

export default CollectionPreview;
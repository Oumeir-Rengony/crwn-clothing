import React, {useContext} from 'react';

import {CartContext} from '../../context/cart/cart.provider';

import CustomButton from '../custom-button/custom-button.component';

import styled from 'styled-components';

const CollectionItem = ({item}) => {

    const {addCartItem} = useContext(CartContext);

    const {name, price, imageUrl} = item;

    return(
        <StyledCollectionItem>
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton className="addToCart-button" onClick={() => addCartItem(item)} inverted>ADD TO CART</CustomButton>
        </StyledCollectionItem>
    );
    
};

const StyledCollectionItem = styled.div`

    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    margin: 8px;

    .image {
        width: 100%;
        height: 95%;
        background-size: cover;
        background-position: center;
        margin-bottom: 5px;
    }

    .addToCart-button{
        width:80%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
        display: none;

        @media screen and (max-width: 800px) {
            display: block;
            opacity: 0.9;
            min-width: unset;
            padding: 0 10px;
        }
    }

    &:hover {
        .image{
            opacity: 0.8;
        }

        button {
            opacity: 0.85;
            display: flex;
        }
    }

    @media screen and (max-width: 800px) {
        width: 40vw;
        &:hover {
            .image {
                opacity: unset;
            }
            button {
                opacity: unset;
            }
        }
    }

    .collection-footer {
        width: 100%;
        height: 5%;
        display: flex;
        justify-content: space-between;
        font-size: 18px;

        .name {
            width: 90%;
            margin-bottom: 15px;
        }

        .price {
            width: 10%;
            text-align: right;
        }
    }
  
`;

export default CollectionItem;
import React, {useContext} from 'react';

import {CartContext} from '../../provider/cart/cart.provider';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({item}) => {

    const {addCartItem} = useContext(CartContext);

    const {name, price, imageUrl} = item;

    return(
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => addCartItem(item)} inverted>ADD TO CART</CustomButton>
        </div>
    );
    
};

export default CollectionItem;
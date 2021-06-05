import React, { useContext } from 'react';

import { CartContext } from '../../provider/cart/cart.provider';

import './checkout-item.styles.scss';

const CheckOutItem = ({cartItem}) => {

    const {addCartItem, removeCartItem, clearItemFromCart} = useContext(CartContext);

    const {imageUrl, name, price, quantity} = cartItem;

    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeCartItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addCartItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    );
};

export default CheckOutItem;
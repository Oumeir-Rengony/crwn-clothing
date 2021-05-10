import React from 'react';

import {useDispatch} from 'react-redux';
import {clearItemFromCart, addCartItem, removeCartItem} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckOutItem = ({cartItem}) => {

    //DISPATCH
    const dispatch = useDispatch();

    const {imageUrl, name, price, quantity} = cartItem;

    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => dispatch(removeCartItem(cartItem))}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => dispatch(addCartItem(cartItem))}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10005;</div>
        </div>
    );
};

export default CheckOutItem;
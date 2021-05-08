import React from 'react';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {useSelector, useDispatch} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
    
    //DISPATCH
    const dispatch = useDispatch();

    //STATE
    const {cartItems} = useSelector(state => state.cart);

    const itemsCount = cartItems.reduce((accumulatedQuantity, cartItem) => {
        return accumulatedQuantity + cartItem.quantity;
    }, 0)

    return(
        <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemsCount}</span>
        </div>
    );
};

export default CartIcon;
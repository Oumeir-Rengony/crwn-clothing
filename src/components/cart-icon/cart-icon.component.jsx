import React from 'react';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {useSelector, useDispatch} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';


const CartIcon = () => {

    //DISPATCH
    const dispatch = useDispatch();

    const itemsCount = useSelector(selectCartItemsCount);

    return(
        <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemsCount}</span>
        </div>
    );
};

export default CartIcon;
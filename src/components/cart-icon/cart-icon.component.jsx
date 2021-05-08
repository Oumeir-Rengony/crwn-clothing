import React from 'react';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {useDispatch} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
    
    //DISPATCH
    const dispatch = useDispatch();

    // const displayCart = useSelector(state => state.cart.hidden);

    return(
        <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

export default CartIcon;
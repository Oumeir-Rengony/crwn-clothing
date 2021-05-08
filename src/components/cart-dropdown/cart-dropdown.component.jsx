import React from 'react';

import {useSelector} from 'react-redux';

import Custombutton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.components';

import './cart-dropdown.styles.scss';


const CartDropdown = () => {

    //STATE
    const {cartItems} = useSelector(state => state.cart);

    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            <Custombutton>GO TO CHECKOUT</Custombutton>
        </div>
    );
};

export default CartDropdown;
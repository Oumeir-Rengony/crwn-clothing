import React, { useContext } from 'react';

import { CartContext } from '../../context/cart/cart.provider';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.components';

import './checkout.styles.scss';

const CheckOutPage = () => {

    const {cartItems, cartTotal} = useContext(CartContext);

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            
            {
                cartItems.map(cartItem => <CheckOutItem key={cartItem.id} cartItem={cartItem} />)
            }

            <div className="total">
                <span>TOTAL: ${cartTotal}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit card for payment
                <br />
                4242 4242 4242 4242 - Exp: current month - CVV: 123
            </div>

            <StripeCheckoutButton price={cartTotal}/>
        </div>
    );
};

export default CheckOutPage;
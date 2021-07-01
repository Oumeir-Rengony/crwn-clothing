import React, { useContext } from 'react';

import { CartContext } from '../../context/cart/cart.provider';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.components';

import styled from 'styled-components';

const CheckOutPage = () => {

    const {cartItems, cartTotal} = useContext(CartContext);

    return (
        <StyledCheckoutWrapper>
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

        </StyledCheckoutWrapper>
    );
};

const StyledCheckoutWrapper = styled.div`
    
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media screen and (max-width: 800px) {
        width: 90%;
    }

    .checkout-header {
        width: 100%;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid darkgrey;

        .header-block {
            text-transform: capitalize;
            width: 23%;

            &:last-child {
                width: 8%;
            }
        }

        @media screen and (max-width: 800px) {
            // width: 22%;
            &:last-child {
                width: 12%;
            }
        }
    }

    .total {
        margin-top: 30px;
        margin-left: auto;
        font-size: 36px;
    }

    button {
        margin-left: auto;
        margin-top: 50px;
    }

    .test-warning {
        text-align: center;
        margin-top: 40px;
        font-size: 24px;
        color: red;
    }
  
`;

export default CheckOutPage;
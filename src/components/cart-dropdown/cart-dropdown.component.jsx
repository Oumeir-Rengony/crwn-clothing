import React, {useContext} from 'react';

import {CartContext} from '../../context/cart/cart.provider';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.components';

import {useHistory} from 'react-router-dom';
import styled from 'styled-components';


const CartDropdown = () => {

    //react router hook
    const history = useHistory();
    
    const {isCartHidden, toggleCartHidden, cartItems} = useContext(CartContext);

    const handleCheckoutClick = () => {
        history.push("/checkout");
        toggleCartHidden();
    };

    return(
       <>
            {
               !isCartHidden &&      

                <StyledCartDropdown id="cart_dropdown">
                    <div className="cart-items">
                        {
                            cartItems.length
                            ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                            : <span className="empty-message">Your cart is empty</span>
                        }
                    </div>
                    <CustomButton onClick={handleCheckoutClick}>GO TO CHECKOUT</CustomButton>
                </StyledCartDropdown>
            }
       </>
        
    );
};

const StyledCartDropdown = styled.div`

    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    .empty-message {
        font-size: 18px;
        margin: 50px auto;
    }

    .cart-items {
        height: 240px;
        display: flex;
        flex-direction: column;
        overflow: scroll;
    }

    button {
        margin-top: auto;
    }
`;

export default CartDropdown;
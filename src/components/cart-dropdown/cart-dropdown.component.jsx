import React, {useContext} from 'react';

import {CartContext} from '../../context/cart/cart.provider';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.components';

import {useHistory} from 'react-router-dom';

import './cart-dropdown.styles.scss';


const CartDropdown = () => {

    //react router hook
    const history = useHistory();
    
    const {isCartHidden, toggleCartHidden, cartItems} = useContext(CartContext);

    console.log(cartItems);

    const handleCheckoutClick = () => {
        history.push("/checkout");
        toggleCartHidden();
    };

    return(
       <>
            {
               !isCartHidden &&      

                <div className="cart-dropdown">
                    <div className="cart-items">
                        {
                            cartItems.length
                            ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                            : <span className="empty-message">Your cart is empty</span>
                        }
                    </div>
                    <CustomButton onClick={handleCheckoutClick}>GO TO CHECKOUT</CustomButton>
                </div>
            }
       </>
        
    );
};

export default CartDropdown;
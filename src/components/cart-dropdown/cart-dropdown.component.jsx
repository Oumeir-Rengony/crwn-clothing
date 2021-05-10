import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {selectCartHidden, selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import Custombutton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.components';

import {useHistory} from 'react-router-dom';

import './cart-dropdown.styles.scss';


const CartDropdown = () => {

    //react router hook
    const history = useHistory();

    //DISPATCH
    const dispatch = useDispatch();

    //STATE
    const cartItems = useSelector(selectCartItems);
    const isCartHidden = useSelector(selectCartHidden);

    const handleCheckoutClick = () => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
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
                    <Custombutton onClick={handleCheckoutClick}>GO TO CHECKOUT</Custombutton>
                </div>
            }
       </>
        
    );
};

export default CartDropdown;
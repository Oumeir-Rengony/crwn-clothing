import React, {createContext, useState, useEffect} from 'react';

import { addItemToCart, RemoveItemFromCart, filterItemFromCart, getCartItemsCount, getCartTotal } from './cart.utils';

export const CartContext = createContext({
    isCartHidden: true,
    toggleCartHidden: () => {},
    cartItems: [],
    addCartItem: () => {},
    removeCartItem: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0,
    cartItemsCount: 0
});

const CartProvider = ({children}) => {

    const [isCartHidden, setCartHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addCartItem = (item) => setCartItems(addItemToCart(cartItems, item));

    const removeCartItem = (item) => setCartItems(RemoveItemFromCart(cartItems, item));

    const clearItemFromCart = (item) => setCartItems(filterItemFromCart(cartItems, item));

    const toggleCartHidden = () => setCartHidden(!isCartHidden);

    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems));
        setCartTotal(getCartTotal(cartItems));
    }, [cartItems]);

    return(
        <CartContext.Provider 
            value={{
                isCartHidden,
                toggleCartHidden,
                cartItems,
                addCartItem,
                removeCartItem,
                clearItemFromCart,
                cartTotal,
                cartItemsCount
            }}
        >

            {children}

        </CartContext.Provider>
    );
};

export default CartProvider;
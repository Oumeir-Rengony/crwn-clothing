export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = findExistingCartItem(cartItems, cartItemToAdd);

    if(existingCartItem){
        return cartItems.map(cartItem => {
            return cartItem.id === cartItemToAdd.id 
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem;
        });
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
};


export const RemoveItemFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = findExistingCartItem(cartItems, cartItemToRemove);

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => {
        return cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem;
    });

};

export const filterItemFromCart = (cartItems, item) => {
    return cartItems.filter(cartItem => cartItem.id !==item.id)
};

export const getCartItemsCount = (cartItems) => {
    return cartItems.reduce((accumulatedQuantity, cartItem) => {
        return accumulatedQuantity + cartItem.quantity;
    }, 0);
};

export const getCartTotal = (cartItems) => {
    return cartItems.reduce((accumulatedQuantity, cartItem) => {
        return accumulatedQuantity + cartItem.quantity * cartItem.price;
    }, 0);
}

const findExistingCartItem = (cartItems, cartItemToCheck) => {
    return cartItems.find(cartItem => cartItem.id === cartItemToCheck.id);
};

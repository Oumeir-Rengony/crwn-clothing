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

const findExistingCartItem = (cartItems, cartItemToHandle) => {
    return cartItems.find(cartItem => cartItem.id === cartItemToHandle.id);
};
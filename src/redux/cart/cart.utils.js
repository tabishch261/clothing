export const addItemToCart = (cartItems, cartItemToAdd) => { // parameters are all the existing cart items and item that we want to add
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id // get each individual item where we chk the id of existing cart item and cart item that we trying to add
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem => // cart items map will return us a array 
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]; // quantity item gets attached the first time around since this, if block
    // wont run when its a new item 
  };

  export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
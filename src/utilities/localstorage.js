const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}

const saveCartToLS = cart =>{
    const cartSTFed= JSON.stringify(cart);
    localStorage.setItem('cart', cartSTFed);
}

const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLS(cart);
    // save to local storage
}

const removeFromLS = id =>{
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}

export {addToLS, getStoredCart,removeFromLS}
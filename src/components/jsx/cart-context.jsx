import React, {createContext,useContext,useState} from 'react';
const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}
export function CartProvider({children}) {
    const [cartItems,setCartItems] = useState([]);
    const removeFromCart = (id) => { setCartItems((prev) => prev.filter((item) => item.id !== id));};
    const addToCart = (item) => setCartItems(prev => [...prev, item]);
    const clearCart = () => setCartItems([]);   

    return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
        {children}
    </CartContext.Provider>
);
}
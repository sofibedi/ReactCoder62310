import React, { createContext, useState } from 'react';

const CartContext = createContext({
  cart: [],
  addItem: (item, quantity) => {},
  removeItem: (itemId) => {},
  clearCart: () => {},
  isInCart: (itemId) => {},
  getTotalItems: () => {},
  getTotalPrice: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter(cartItem => cartItem.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some(cartItem => cartItem.id === itemId);
  };

  const getTotalItems = () => {
    return cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, getTotalItems, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

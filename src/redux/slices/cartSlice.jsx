import { createSlice } from '@reduxjs/toolkit';
import { loadCartFromStorage, saveCartToStorage } from '../localStorage';

const initialState = {
  cartItems: loadCartFromStorage(), 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
      saveCartToStorage(state.cartItems); 
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      saveCartToStorage(state.cartItems);
    },  
    clearCart(state) {
      state.cartItems = [];
      saveCartToStorage(state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

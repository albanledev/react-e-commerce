// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    clearCart: (state => {
      return []
    })
    // Ajoutez d'autres actions selon vos besoins (par exemple, removeFromCart, clearCart, etc.)
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
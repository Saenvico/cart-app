import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const currentItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === currentItem.id
      );
      state.totalQuantity--;
      if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== currentItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    quantity(state) {
      state.totalQuantity = state.items.lenght;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const productInitialState = { productArray: [] };

const productSlice = createSlice({
  name: 'product',
  initialState: productInitialState,
  reducers: {
    increaseQuntity(state){

    },
    decreaseQuantity(state) {
        
    }
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;

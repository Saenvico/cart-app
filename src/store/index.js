import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './cart-slice';
import productSliceReducer from './product';
import uiSliceReducer from './ui-slice';

const store = configureStore({
  reducer: { cart: cartSliceReducer, product: productSliceReducer, ui: uiSliceReducer },
});

export default store;

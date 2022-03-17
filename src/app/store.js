import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../features/cart/cartSlice";
import shopReducer from "../features/shop/shopSlice";
import notify from './middleware/notify';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    notify
  ]
});

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import cartReucer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReucer,
  },
});

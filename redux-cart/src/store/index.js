import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './product-slice';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;

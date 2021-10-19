import { createSlice } from '@reduxjs/toolkit';

const initialProductState = {
  status: '',
  list: [],
  error: null,
  cart: [],
  cartNums: 0,
};
const productsSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {
    updateProductsState(state, action) {
      state.status = action.payload.status;
      state.error = action.payload.error;
      state.list = action.payload.list;
    },
    getProducts(state, action) {
      let arr = [];
      for (const [id, obj] of Object.entries(action.payload)) {
        arr.push({
          ...obj,
          id,
        });
      }
      state.list = arr;
      state.status = 'completed';
      state.error = null;
    },
    addToCart(state, action) {
      const newProduct = action.payload;
      const existingItem = state.cart.find((item) => item.id === newProduct.id);
      state.cartNums++;
      if (existingItem) {
        existingItem.num++;
        existingItem.totalPrice =
          +existingItem.totalPrice + +existingItem.price;
      } else {
        state.cart.push({
          ...newProduct,
          num: 1,
          totalPrice: newProduct.price,
        });
      }
    },
    removeCart(state, action) {
      const prodId = action.payload;
      const itemInCart = state.cart.find((ele) => ele.id === prodId);
      state.cartNums--;
      if (itemInCart.num > 1) {
        itemInCart.num--;
        itemInCart.totalPrice = +itemInCart.totalPrice - +itemInCart.price;
      } else {
        state.cart = state.cart.filter((ele) => ele.id !== prodId);
      }
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types/types';
import { ApiProduct } from '../../api/products';

interface CartState {
  products: ApiProduct[];
}

const initialState: CartState = { products: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductCart: (state, action: PayloadAction<ApiProduct>) => {
      const product = action.payload;
      const isIncludeProduct = state.products.find(
        ({ id }) => id === product.id
      );

      if (isIncludeProduct) return;
      state.products = [...state.products, product];
    },
    deleteProductCart: (state, action: PayloadAction<ApiProduct>) => {
      const product = action.payload;
      state.products = state.products.filter((el) => el.id !== product.id);
    },
  },
});

export const productIsIncludeProduct =
  (state: CartState) => (id: ApiProduct['id']) =>
    !!state.products.find((product) => id === product.id);

export const { actions, reducer: cartReducer } = cartSlice;
export const { addProductCart, deleteProductCart } = actions;
export default cartReducer;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ApiProduct, productApi } from '../../api/products';
import { AppDispatch } from '../store';

interface ProductState {
  products: ApiProduct[];
  currentProducts: ApiProduct[];
}

const initialState: ProductState = { products: [], currentProducts: [] };

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    searchProduct: (state, action: PayloadAction<string>) => {
      if (action.payload === '') {
        state.currentProducts = state.products;
      } else {
        state.currentProducts = state.products.filter((product) =>
          product.title
            .toLowerCase()
            .includes(action.payload.toLowerCase().trim())
        );
      }
    },
    loadProduct: (state, action: PayloadAction<ApiProduct[]>) => {
      state.currentProducts = action.payload;
      state.products = action.payload;
    },
  },
});

export const { actions, reducer: ProductReducer } = ProductSlice;
export const { searchProduct, loadProduct } = actions;
export const getProduct = () => async (dispatch: AppDispatch) => {
  const result = await productApi.getProduct();
  dispatch(loadProduct(result));
};

export default ProductReducer;

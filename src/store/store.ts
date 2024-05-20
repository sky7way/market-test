import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice';
import ProductReducer from './slices/productSlice';

const rootReducer = combineReducers({cart: cartReducer, product: ProductReducer});

export const store = configureStore({
  reducer:  rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
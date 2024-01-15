import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './slice/products';
import productDetailsReducer from './slice/productDetails';
import addCartReducer from './slice/addCart';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    addCart: addCartReducer,
  },
});

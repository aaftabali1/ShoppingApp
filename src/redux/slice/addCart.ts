import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../../utils/type';

const addCart = createSlice({
  name: 'productDetails',
  initialState: {
    isLoading: false,
    cart: <Product[]>[],
    isError: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const checkInCart = state.cart.find(
        (el: Product) => el.id == action.payload.id,
      );
      let cartItems: Product[] = state.cart;
      if (checkInCart) {
        cartItems = cartItems.map((val: Product) => {
          if (val.id == action.payload.id) {
            const obj = {...val, quantity: val.quantity + 1};
            return obj;
          }
          return val;
        });
        state.cart = cartItems;
      } else {
        cartItems.push({...action.payload, quantity: 1});
        state.cart = cartItems;
      }
    },
    removeCart: (state, action) => {
      const data = state.cart.map((val: Product) => {
        if (val.id == action.payload.id) {
          var obj = {...val, quantity: val.quantity - 1};
          return obj;
        }
        return val;
      });
      data.filter(val => !!val.quantity);

      state.cart = data;
    },
    deleteItemFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (el: Product) => el.id !== action.payload.id,
      );
    },
  },
});

export const {addToCart, removeCart, deleteItemFromCart} = addCart.actions;

export default addCart.reducer;

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProductDetails = createAsyncThunk(
  'fetchProductDetails',
  async (id: string) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return response.json();
  },
);

const productDetails = createSlice({
  name: 'productDetails',
  initialState: {
    isLoading: false,
    data: {},
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProductDetails.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log('Error', action.payload);
    });
  },
  reducers: {},
});

export default productDetails.reducer;

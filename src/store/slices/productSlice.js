import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageIndex: 0,
}
  
export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setProductPageIndex: (state, action) => {
      state.pageIndex = action.payload
    },
  },
})

export const { setProductPageIndex } = productSlice.actions
export default productSlice.reducer
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebar: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebarSlice',
  initialState,
  reducers: {
    setSidebar: (state, action) => {
      state.isSidebar = action.payload
    },
  },
})

export const { setSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer
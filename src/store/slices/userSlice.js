import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: '',
  isAuth: false,
}
  
export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload
    },
    setUserStatus: (state, action) => {
      state.status = action.payload
    },
  },
})

export const { setAuth, setUserStatus } = userSlice.actions
export default userSlice.reducer
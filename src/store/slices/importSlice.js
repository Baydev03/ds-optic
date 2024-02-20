import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  titles: [],
  datas: [],
}

export const importSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setImportTitles: (state, action) => {
      state.titles = action.payload
    },
    setImportDatas: (state, action) => {
      state.datas = JSON.parse(action.payload)
    },
  },
})

export const { setImportTitles, setImportDatas } = importSlice.actions
export default importSlice.reducer
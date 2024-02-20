import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModal: false,
  modalType: '',
  isImportModal: false,
  importModalType: '',
  mobileModalType: '',
  isAdder: true,
}

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setModal: (state) => {
      state.isModal = !state.isModal
    },
    setModalType: (state, action) => {
      state.modalType = action.payload
    },
    setImportModal: (state) => {
      state.isImportModal = !state.isImportModal
    },
    setImportModalType: (state, action) => {
      state.importModalType = action.payload
    },
    setMobileModalType: (state, action) => {
      state.mobileModalType = action.payload
    },
    setAdder: (state, action) => {
      state.isAdder = action.payload
    },
  },
})

export const { 
  setModal, 
  setModalType, 
  setImportModal, 
  setImportModalType,
  setMobileModalType,
  setAdder,
} = modalSlice.actions
export default modalSlice.reducer
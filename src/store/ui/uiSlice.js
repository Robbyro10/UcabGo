
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isProductModalOpen: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    onOpenProductModal: (state) => {
        state.isProductModalOpen = true;
    },
    onCloseProductModal: (state) => {
        state.isProductModalOpen = false;
    },
  }
});

export const { onOpenProductModal, onCloseProductModal } = uiSlice.actions

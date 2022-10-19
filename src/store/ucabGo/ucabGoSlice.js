
import { createSlice } from '@reduxjs/toolkit'
import { restaurants } from '../../UcabGo/data/restaurants'

const tempData = restaurants;

const initialState = {
    restaurants: [
        tempData
    ],


}

export const ucabGoSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    onOpenProductModal: (state) => {
        state.isProductModalOpen = true;
    },
  }
});

export const { onOpenProductModal } = ucabGoSlice.actions

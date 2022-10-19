
import { createSlice } from '@reduxjs/toolkit'

const tempProduct = {
    'itemId': 'holy-holy',
    'name': 'Holy Burger',
    'price': '9$',
    'desc': 'Hamburgesa de pollo con tocineta',
    'bestSeller': 'true',
}

const initialState = {
    products: [
        tempProduct
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

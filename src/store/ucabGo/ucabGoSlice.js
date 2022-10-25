
import { createSlice } from '@reduxjs/toolkit';
import { orders, products, stores } from '../../data'

const initialState = {
    stores,
    products,
    orders,
    activeProduct: null
}

export const ucabGoSlice = createSlice({
  name: 'ucabGo',
  initialState,
  reducers: {
    onSetActiveProduct: (state, {payload}) => {
      state.activeProduct = payload;
    },
    onAddNewProduct: (state, {payload}) => {
      state.products.push(payload);
      state.activeProduct = null;
    },
    onUpdateProduct: (state, {payload}) => {
      state.products = state.products.map( product => {
        if (product._id === payload._id){
          return payload;
        }

        return product;
      })
    },
    onDeleteProduct: ( state ) => {
      if ( state.activeProduct ){
        state.products = state.products.filter( product => product._id !== state.activeProduct._id);
        state.activeProduct = null;
      }
    }
  }
});

export const { onSetActiveProduct, onAddNewProduct, onUpdateProduct, onDeleteProduct } = ucabGoSlice.actions

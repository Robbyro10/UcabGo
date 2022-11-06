
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoadingProducts: true,
    isLoadingStores: true,
    isLoadingOrders: true,
    isLoadingClients: true,
    products: [],
    stores: [],
    orders: [],
    clients: [],
    activeProduct: null,
    activeOrder: null,
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
    onAddNewOrder: (state, {payload}) => {
      state.orders.push(payload);
      state.activeOrder = null
    },
    onUpdateProduct: (state, {payload}) => {
      state.products = state.products.map( product => {
        if (product.id === payload.id){
          return payload;
        }
        return product;
      })
    },
    onDeleteProduct: ( state ) => {
      if ( state.activeProduct ){
        state.products = state.products.filter( product => product.id !== state.activeProduct.id);
        state.activeProduct = null;
      }
    },
    onLoadProducts: (state, {payload = []}) => {
      state.isLoadingProducts = false;
      // state.products = payload;
      payload.forEach( product => {
        const exists = state.products.some( dbProduct => dbProduct.id === product.id );
        if ( !exists ) {
          state.products.push(product);
        }
      })
    },
    onLoadStores: (state, {payload = []}) => {
      state.isLoadingStores = false;
      state.stores = payload;
    },
    onLoadClients: (state, {payload = []}) => {
      state.isLoadingClients = false;
      state.clients = payload;
    },
    onLoadOrders: (state, {payload = []}) => {
      state.isLoadingOrders = false;
      state.orders = payload;
    }
  }
});

export const { 
  onSetActiveProduct, 
  onAddNewProduct, 
  onAddNewOrder, 
  onUpdateProduct, 
  onDeleteProduct, 
  onLoadStores, 
  onLoadProducts, 
  onLoadClients, 
  onLoadOrders } = ucabGoSlice.actions

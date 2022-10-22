
import { createSlice } from '@reduxjs/toolkit';
import { products, restaurants } from '../../data'

const tempRestaurants = {
  _id: '203948y3j9f40j2', 
  name:'Holy Chicken', 
  location:'Feria', 
  desc:'Hamburgesas de Pollo',
  horario:'10am - 4pm',
  img: '/assets/restaurants/holy.jpg', //temporary
};

const tempProducts = {
  _id: 'lsvnovoiweos[pcm',
  name: 'Holy Burger',
  price: 9,
  desc: 'Hamburgesa de pollo con tocineta',
  bestSeller: 'true',
  restaurant: 'Holy Chicken',
  img: '/assets/restaurants/holy.jpg' //temporary
}

const initialState = {
    restaurants: restaurants,
    products: products,
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

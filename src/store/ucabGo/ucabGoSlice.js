
import { createSlice } from '@reduxjs/toolkit';
import { products, restaurants } from '../../data'

const tempRestaurants = {
  _id: '203948y3j9f40j2', 
  name:'Holy Chicken', 
  location:'Feria', 
  desc:'Hamburgesas de Pollo',
  horario:'10am - 4pm',
  img: '/assets/restaurants/holy.jpg' //temporary
};

const tempProducts = {
  _id: 'lsvnovoiweos[pcm',
  name: 'Holy Burger',
  price: '9$',
  desc: 'Hamburgesa de pollo con tocineta',
  bestSeller: 'true',
  restaurant: 'Holy Chicken',
  img: '/assets/restaurants/holy.jpg' //temporary
}

const initialState = {
    restaurants: [
        tempRestaurants
    ],
    products: [
      tempProducts
    ]
}

export const ucabGoSlice = createSlice({
  name: 'ucabGo',
  initialState,
  reducers: {
    onAddNewProduct: (state, {payload}) => {
      state.products.push(payload);
    }
  }
});

export const { onAddNewProduct } = ucabGoSlice.actions

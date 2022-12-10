
import { onAddNewProduct, onDeleteProduct, onLoadProducts, onSetActiveProduct, onUpdateProduct, ucabGoSlice } from "../../../src/store/ucabGo/ucabGoSlice"
import { appWithActiveProductState, appWithProductsState, initialState, products } from "../../__fixtures__/ucabGoStates";

describe('tests in ucabGoSlice', () => { 
    test('should return default state', () => { 
        // const state = ucabGoSlice.getInitialState();
        expect(ucabGoSlice.getInitialState()).toEqual(initialState)
    });

    test('onSetActiveProduct should activate a product', () => { 
        const state = ucabGoSlice.reducer(appWithProductsState, onSetActiveProduct(products[0]))
        expect(state).toEqual(appWithActiveProductState);
    });

    test('should add a new product to the state', () => { 
        const newProduct = {
            id: '4',
            name: 'Arroz con Pollo',
            desc: 'Hecho en casa',
            img: 'http://res.clouiwerwesdfojoidf',
            active: true,
        }
        const state = ucabGoSlice.reducer(appWithProductsState, onAddNewProduct(newProduct))
        expect(state.products).toEqual([...products, newProduct]);
    })

    test('should update the product', () => { 
        const updatedProduct = {
            id: '1',
            name: 'Arroz con Pollo',
            desc: 'Hecho en casa',
            img: 'http://res.clouiwerwesdfojoidf',
            active: true,
        }
        const state = ucabGoSlice.reducer(appWithProductsState, onUpdateProduct(updatedProduct));
        expect(state.products).toContain(updatedProduct);
    })

    test('should delete a product', () => { 
        const state = ucabGoSlice.reducer(appWithActiveProductState, onDeleteProduct());
        expect(state.products).not.toContain(products[0])
        expect(state.activeProduct).toBe(null)
     })

     test('should load products', () => { 
        const state = ucabGoSlice.reducer(initialState, onLoadProducts(products));
        expect(state.isLoadingProducts).toBeFalsy();
        expect(state.products).toEqual(products)
      })

 })
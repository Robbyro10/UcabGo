import { onCloseProductModal, onOpenProductModal, uiSlice } from "../../../src/store/ui/uiSlice"

describe('tests in uiSlice', () => { 
    test('should return default state', () => { 

        expect(uiSlice.getInitialState().isProductModalOpen).toBeFalsy();
        
     })

     test('should change isProductModalOpen', () => { 
        let state = uiSlice.getInitialState();
        // Opens the modal
        state = uiSlice.reducer(state, onOpenProductModal())
        expect(state.isProductModalOpen).toBeTruthy();

        // Closes the modal
        state = uiSlice.reducer(state, onCloseProductModal());
        expect(state.isProductModalOpen).toBeFalsy();
      })
 })
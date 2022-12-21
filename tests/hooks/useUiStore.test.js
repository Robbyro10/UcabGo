import { configureStore } from "@reduxjs/toolkit";
import { act, renderHook } from "@testing-library/react"
import { Provider } from "react-redux";
import { useUiStore } from "../../src/hooks/useUiStore"
import {store} from "../../src/store/store"
import { uiSlice } from "../../src/store/ui/uiSlice";

const getMockStore = ( initialState ) => {
    return configureStore({
        reducer: {
            ui: uiSlice.reducer
        },
        preloadedState: {
            ui: {...initialState}
        }
    })
}

describe('tests in useUiStore', () => { 
    test('should return default values', () => { 

        const mockStore = getMockStore({ isProductModalOpen: false });
        
        const { result } = renderHook( () => useUiStore(), {
            wrapper: ({children}) => <Provider store={ mockStore }>{children}</Provider>
        });
        
        expect(result.current).toEqual({
            isProductModalOpen: false,
            openProductModal: expect.any(Function),
            closeProductModal: expect.any(Function),
        });

     })

    test('openProductModal should toggle isProductModalOpen true', () => { 
        const mockStore = getMockStore({ isProductModalOpen: false });
        
        const { result } = renderHook( () => useUiStore(), {
            wrapper: ({children}) => <Provider store={ mockStore }>{children}</Provider>
        });

        const { openProductModal } = result.current;
        
        act( () => {
            openProductModal()
        });

        expect(result.current.isProductModalOpen).toBeTruthy();
        
     })

     test('closeProductModal should toggle isProductModalOpen false', () => { 
        const mockStore = getMockStore({ isProductModalOpen: true });
        
        const { result } = renderHook( () => useUiStore(), {
            wrapper: ({children}) => <Provider store={ mockStore }>{children}</Provider>
        });

        const { closeProductModal } = result.current;
        
        act( () => {
            closeProductModal()
        });

        expect(result.current.isProductModalOpen).toBeFalsy();
        
     })
 })
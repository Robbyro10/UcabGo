import { useDispatch, useSelector } from "react-redux"
import { onOpenProductModal, onCloseProductModal } from "../store/ui/uiSlice";


export const useUiStore = () => {
    const dispatch = useDispatch();

    const { isProductModalOpen } = useSelector( state => state.ui );

    const openProductModal = () => {
        dispatch( onOpenProductModal() )
    }

    const closeProductModal = () => {
        dispatch( onCloseProductModal() )
    }

    return {
        //* Propiedades
        isProductModalOpen,

        //* Metodos
        openProductModal,
        closeProductModal,
    }
}
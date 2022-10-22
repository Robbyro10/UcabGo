import { useDispatch, useSelector } from "react-redux"
import { onAddNewProduct, onDeleteProduct, onSetActiveProduct, onUpdateProduct } from "../store/ucabGo/ucabGoSlice";


export const useUcabGoStore = () => {

    const dispatch = useDispatch();
    const { restaurants, products, activeProduct } = useSelector( state => state.ucabGo);

    const setActiveProduct = ( product ) => {
      dispatch( onSetActiveProduct(product) )
    }

    const startSavingProduct = async( product ) => {
      // TODO: llegar al backend

      if ( product._id ){
        // Updating
        dispatch(onUpdateProduct({...product}))
      } else {
        // creating
        dispatch(onAddNewProduct({ ...product, _id: new Date().getTime()}));
      }
    }

    const startDeleteEvent = () => {
      // Todo: llegar al backend
      dispatch(onDeleteProduct())
    }

  return {
    //* Propiedades
    activeProduct,
    restaurants,
    products,
    hasProductSelected: !!activeProduct,

    //* Metodos
    setActiveProduct,
    startSavingProduct,
    startDeleteEvent
    
  }
}

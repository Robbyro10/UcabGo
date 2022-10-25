import { useDispatch, useSelector } from "react-redux"
import { ucabGoApi } from "../api";
import { onAddNewProduct, onDeleteProduct, onSetActiveProduct, onUpdateProduct } from "../store/ucabGo/ucabGoSlice";


export const useUcabGoStore = () => {

    const dispatch = useDispatch();
    const { restaurants, products, activeProduct, orders } = useSelector( state => state.ucabGo);
    const { user } = useSelector(state => state.auth)

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
        const { data } = await ucabGoApi.post('/products', product);
        dispatch(onAddNewProduct({ ...product, id: data.product.id, user }));
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
    orders,

    //* Metodos
    setActiveProduct,
    startSavingProduct,
    startDeleteEvent
    
  }
}

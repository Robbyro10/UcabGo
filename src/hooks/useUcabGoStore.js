import { useDispatch, useSelector } from "react-redux"
import { onAddNewProduct } from "../store/ucabGo/ucabGoSlice";


export const useUcabGoStore = () => {

    const dispatch = useDispatch();
    const { restaurants, products } = useSelector( state => state.ucabGo);

    const startSavingProduct = async( product ) => {
      // TODO: llegar al backend

      if ( product._id){
        // Updating
      } else {
        // creating
        dispatch(onAddNewProduct({ ...product, _id: new Date().getTime()}));
      }
    }

  return {
    //* Propiedades
    restaurants,
    products,

    //* Metodos
    startSavingProduct,
    
  }
}

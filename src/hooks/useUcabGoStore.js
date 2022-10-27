import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { ucabGoApi } from "../api";
import { onAddNewProduct, onDeleteProduct, onLoadProducts, onSetActiveProduct, onUpdateProduct } from "../store/ucabGo/ucabGoSlice";

export const useUcabGoStore = () => {

    const dispatch = useDispatch();
    const { stores, products, activeProduct, orders } = useSelector( state => state.ucabGo);
    const { user } = useSelector(state => state.auth)

    const setActiveProduct = ( product ) => {
      dispatch( onSetActiveProduct(product) )
    }

    const startSavingProduct = async( product ) => {
      try {
        
        if ( product.id ){
          // Updating
          await ucabGoApi.put(`/products/${product.id}`, product);
          dispatch(onUpdateProduct({...product, user}));
          return;
        } 
  
        // creating
        const { data } = await ucabGoApi.post('/products', product);
        dispatch(onAddNewProduct({ ...product, id: data.product.id, user }));
        Swal.fire("Agregado!", `${product.name} ha sido agregado`, "success");

      } catch (error) {
        console.log(error);
        Swal.fire('Error al guardar', error.response.data.msg, 'error');
      }

      
    }

    const startDeleteProduct = () => {
      // Todo: llegar al backend
      dispatch(onDeleteProduct())
      Swal.fire("Eliminado!", "Producto eliminado correctamente", "success");
    }

    const startLoadingProducts = async () => {
      try {

        const { data } = await ucabGoApi.get('/products');
        const {products} = data;
        dispatch(onLoadProducts(products));
        
      } catch (error) {
        console.log('Error cargando Products');
        console.log(error);
      }
    }

  return {
    //* Propiedades
    activeProduct,
    stores,
    products,
    hasProductSelected: !!activeProduct,
    orders,

    //* Metodos
    setActiveProduct,
    startSavingProduct,
    startDeleteProduct,
    startLoadingProducts,
    
  }
}

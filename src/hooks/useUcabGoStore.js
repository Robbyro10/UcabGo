import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { ucabGoApi } from "../api";
import { onAddNewProduct, onDeleteProduct, onLoadProducts, onSetActiveProduct, onUpdateProduct, onAddNewOrder } from "../store/ucabGo/ucabGoSlice";

export const useUcabGoStore = () => {

    const dispatch = useDispatch();
    const { stores, products, activeProduct, orders } = useSelector( state => state.ucabGo);
    const { user } = useSelector(state => state.auth)

    const setActiveProduct = ( {product} ) => {
      dispatch( onSetActiveProduct(product) )
      console.log(activeProduct);
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
        window.location.reload();

      } catch (error) {
        console.log(error);
        Swal.fire('Error al guardar', error.response.data.msg, 'error');
      }  
    }

    const startSavingOrder = async( order ) => {
      try {
        // creating
        const { data } = await ucabGoApi.post('/orders', order);
        dispatch(onAddNewOrder({ ...order, id: data.order.id, user }));

      } catch (error) {
        console.log(error);
        Swal.fire('Error al guardar', error.response.data.msg, 'error');
      }  
    }

    const startDeleteProduct = async( productId ) => {
      // Todo: llegar al backend
      try {
        
        await ucabGoApi.delete(`/products/${productId}`);
        dispatch(onDeleteProduct());
        Swal.fire("Eliminado!", "Producto eliminado correctamente", "success");

      } catch (error) {
        console.log(error);
        Swal.fire('Error al Eliminar', error.response.data.msg, 'error');
      }
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
    startSavingOrder,
    startDeleteProduct,
    startLoadingProducts,
    
  }
}

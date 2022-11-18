import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { ucabGoApi } from "../api";
import { onAddNewProduct, onDeleteProduct, onLoadProducts, onLoadStores, onLoadOrders, onDispatchOrder, onSetActiveProduct, onUpdateProduct, onAddNewOrder, onLoadClients, onDeleteOrder } from "../store/ucabGo/ucabGoSlice";

export const useUcabGoStore = () => {

    const dispatch = useDispatch();
    const { stores, products, clients, activeProduct, orders } = useSelector( state => state.ucabGo);
    const { user } = useSelector(state => state.auth)

    const setActiveProduct = ( {product} ) => {
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

    const dispatchOrder = async( order ) => {
      try {
        await ucabGoApi.patch(`orders/${order}`, order);
        
        dispatch(onDispatchOrder({...order, user}));

      } catch (error) {
        console.log(error);
        Swal.fire('Algo', error.response.data.msg, 'error');
      }
    }

    const startDeleteOrder = async( orderId ) => {

      try {
        
        await ucabGoApi.delete(`/orders/${orderId}`)
        dispatch(onDeleteOrder(orderId));

      } catch (error) {
        console.log(error);
        Swal.fire('Error al Cancelar', error.response.data.msg, 'error');
      }
    }

    const startDeleteProduct = async( productId ) => {
      try {
        
        await ucabGoApi.delete(`/products/${productId}`);
        dispatch(onDeleteProduct());

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

    const startLoadingStores = async () => {
      try {
        const { data } = await ucabGoApi.get('/stores/');
        const {stores} = data;
        dispatch(onLoadStores(stores));
        
      } catch (error) {
        console.log('Error cargando Stores');
        console.log(error);
      }
    }

    const startLoadingClients = async () => {
      try {
        const { data } = await ucabGoApi.get('/clients/');
        const {clients} = data;
        dispatch(onLoadClients(clients));
        
      } catch (error) {
        console.log('Error cargando clientes');
        console.log(error);
      }
    }

    const startLoadingOrders = async (storeId = "") => {
      try {
        const {data} = await ucabGoApi.get(`/orders/${storeId}`);
        const {orders} = data;
        dispatch(onLoadOrders(orders));
        
      } catch (error) {
        console.log('Error cargando pedidos');
        console.log(error);
      }
    }

  return {
    //* Propiedades
    activeProduct,
    stores,
    products,
    clients,
    hasProductSelected: !!activeProduct,
    orders,

    //* Metodos
    setActiveProduct,
    startSavingProduct,
    startSavingOrder,
    dispatchOrder,
    startDeleteProduct,
    startDeleteOrder,
    startLoadingProducts,
    startLoadingStores,
    startLoadingClients,
    startLoadingOrders,
    
  }
}

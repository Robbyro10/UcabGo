import { useUcabGoStore } from "../../hooks";


export const getProductsByStore = (store) => {
    const {products} = useUcabGoStore();
    return products.filter( product => product.store === store.name)
}
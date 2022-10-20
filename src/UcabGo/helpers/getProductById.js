import { useUcabGoStore } from "../../hooks";


export const getProductById = (id) => {
    const { products } = useUcabGoStore();
    return products.find( item => item._id === id)
}
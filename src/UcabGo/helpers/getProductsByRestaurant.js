import { useUcabGoStore } from "../../hooks";


export const getProductsByRestaurant = (restaurant) => {
    const {products} = useUcabGoStore();
    return products.filter( product => product.restaurant === restaurant.name)
}
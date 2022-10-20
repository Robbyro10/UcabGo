import { useUcabGoStore } from "../../hooks";


export const getRestaurantById = (id) => {
    const { restaurants } = useUcabGoStore();
    return restaurants.find( restaurant => restaurant._id === id)
}
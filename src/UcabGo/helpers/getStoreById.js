import { useUcabGoStore } from "../../hooks";


export const getStoreById = (id) => {
    const { stores } = useUcabGoStore();
    return stores.find( store => store._id === id)
}
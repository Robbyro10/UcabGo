import { useSelector } from "react-redux"


export const useUcabGoStore = () => {

    const { products } = useSelector( state => state.ucabGo);

  return {
    //* Propiedades
    products

    //* Metodos
    
  }
}

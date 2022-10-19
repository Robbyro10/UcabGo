import { useSelector } from "react-redux"


export const useUcabGoStore = () => {

    const { restaurants } = useSelector( state => state.ucabGo);

  return {
    //* Propiedades
    restaurants

    //* Metodos
    
  }
}

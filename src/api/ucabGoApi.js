import axios  from "axios";
import { getEnvVariables } from "../UcabGo/helpers" 

const { VITE_API_URL } = getEnvVariables()

const ucabGoApi = axios.create({
    baseURL: VITE_API_URL
});

// Configurar interceptores

export default ucabGoApi;
import axios  from "axios";
import { getEnvVariables } from "../UcabGo/helpers" 

const { VITE_API_URL } = getEnvVariables()

const ucabGoApi = axios.create({
    baseURL: VITE_API_URL
});

// TODO: Configurar interceptores
ucabGoApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})

export default ucabGoApi;
import { ucabGoApi } from '../api'


export const useAuthStore = () => {

    const { status, client, errorMessage } = useSelector( state => state.auth);
    // const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        console.log({email,password});

        try {

            const resp = await ucabGoApi.post('/clients', {email, password})
            console.log({resp});
            
        } catch (error) {
            console.log({error});
        }
        
    }

    return {
        //* Propiedades
        errorMessage,
        status,
        client

        // Metodos
    }
}
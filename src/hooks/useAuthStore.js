
import { useDispatch, useSelector } from 'react-redux';
import { ucabGoApi } from '../api'
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/auth/authSlice';


export const useAuthStore = (type = 'clients') => {

    const { status, user, errorMessage } = useSelector( state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        dispatch(onChecking());

        try {

            const { data } = await ucabGoApi.post(`/${type}`, {email, password})
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            localStorage.setItem('type', type );
            dispatch( onLogin({ name: data.name, uid: data.uid, type}));
            
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10);
        }  
    }

    const startRegister = async({ email, password, name, phone, desc, location}) => {
        dispatch(onChecking());

        try {

            const { data } = await ucabGoApi.post(`/${type}/new`, {email, name, password, phone, desc, location});
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            localStorage.setItem('type', type );
            dispatch( onLogin({ name: data.name, uid: data.uid, type }));

        } catch (error) {
            dispatch( onLogout(error.response.data?.msg || '--'));
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10);
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if ( !token ) return dispatch(onLogout());

        try {
            const { data } = await ucabGoApi.get(`/${type}/renew`);
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid, type }));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout())
    }
    

    return {
        //* Propiedades
        errorMessage,
        status,
        user,

        //* Metodos
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
    }
}
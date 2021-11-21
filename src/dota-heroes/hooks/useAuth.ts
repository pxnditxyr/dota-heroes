import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

export const useAuth = () => {
    const { user, authLogin, authLogout } = useContext( AuthContext );
    return {
        user, 
        authLogin,
        authLogout,
    };
};

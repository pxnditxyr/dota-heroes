import { useEffect, useReducer } from 'react';
import { User } from '../interfaces/interfaces';

import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';


const INITIAL_STATE : User = {
    id: "",
    name: "",
    email: "",
    password: "",
    logged: false,
};

const init : () => User = () => {
    return JSON.parse( localStorage.getItem( 'user' ) || "{}" );
}

interface AuthProviderProps {
    children: JSX.Element | JSX.Element[];
};

export const AuthProvider = ( { children }: AuthProviderProps ) => {

    const [ user, dispatch ] = useReducer( authReducer, INITIAL_STATE, init );
    useEffect( () => {
        if ( !user ) return;
        localStorage.setItem( 'user', JSON.stringify( user ) );
    }, [ user ] )

    const authLogin = ( user: User ) => {
        dispatch({ type: "authLogin", payload: user });
    };

    const authLogout = ( logged : boolean ) => {
        dispatch({ type: "authLogout", payload: { logged } });
    };
    const auth = () => {
        dispatch({ type: "auth", payload: {} })
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                authLogin,
                authLogout,
                auth,
            }}
        >
            { children }
        </AuthContext.Provider>
    );
};

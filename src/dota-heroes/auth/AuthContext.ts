import { createContext } from 'react';

import { User } from '../interfaces/interfaces';

export type AuthContextProps = {
    user: User;
    authLogin: ( user : User ) => void;
    authLogout: ( logged : boolean ) => void;
};

export const AuthContext = createContext<AuthContextProps>( {} as AuthContextProps );

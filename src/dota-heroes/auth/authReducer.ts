import { User } from '../interfaces/interfaces';

type authAction =
    | { type: "authLogin", payload: User }
    | { type: "authLogout", payload: { logged : boolean } }
    | { type: "auth", payload: {} }

export const authReducer = ( state : User, action : authAction ) : User => {

    switch ( action.type ) {
        case "authLogin":
            return {
                ...action.payload,
                logged: true,
            }

        case "authLogout":
            return {
                id: "",
                name: "",
                email: "",
                password: "",
                logged: false,
            }
        default: 
            return state;
    }
};

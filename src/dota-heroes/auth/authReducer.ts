import { User } from '../interfaces/interfaces';

type authAction =
    | { type: "authLogin", payload: User }
    | { type: "authLogout", payload: { logged : boolean } }

export const authReducer = ( state : User, action : authAction ) : User => {

    switch ( action.type ) {
        case "authLogin":
            return {
                ...action.payload,
                logged: true,
            }

        case "authLogout":
            return {
                ...state,
                logged: false
            }
        default: 
            return state;
    }
};

import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const PrivateRoute = ( { children } : Props  ) => {

    const { user } = useAuth();

    const { pathname, search } = useLocation();

    localStorage.setItem( 'lastPath', pathname + search );

    return user.logged
        ? <> { children } </>
        : <Navigate to="login" />
};

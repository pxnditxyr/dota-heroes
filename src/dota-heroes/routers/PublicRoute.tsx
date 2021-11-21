import { Navigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

interface Props {
    children : JSX.Element | JSX.Element[];
}

export const PublicRoute = ( { children } : Props ) => {

    const { user } = useAuth();

    return user.logged
        ? <Navigate to="/" />
        : <> { children } </>
}

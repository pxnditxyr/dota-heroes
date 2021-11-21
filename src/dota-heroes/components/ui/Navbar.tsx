import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';


export const Navbar = () => {
    const { user, authLogout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate( '/login' );
        authLogout( false );
    }

    return (
        <nav>
            <div>
                <NavLink
                    to="/strenght"
                >
                    Strenght
                </NavLink>
                <NavLink
                    to="/agility"
                >
                    Agility
                </NavLink>
                <NavLink
                    to="/intelligence"
                >
                    Intelligence
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/search"
                >
                    Search
                </NavLink>
                <span> { user.name } </span>
                <button onClick={ handleLogout }>
                    Logout
                </button>
            </div>
        </nav>
    );
};

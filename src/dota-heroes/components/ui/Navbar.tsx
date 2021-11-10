import {
    NavLink,
} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <div>
                <NavLink
                    exact
                    to="/strenght"
                >
                    Strenght
                </NavLink>
                <NavLink
                    exact
                    to="/agility"
                >
                    Agility
                </NavLink>
                <NavLink
                    exact
                    to="/intelligence"
                >
                    Intelligence
                </NavLink>
            </div>
            <div>
                <NavLink
                    exact
                    to="/search"
                >
                    Search
                </NavLink>
                <NavLink
                    exact
                    to="/login"
                >
                    Logout
                </NavLink>
            </div>
        </nav>
    );
};

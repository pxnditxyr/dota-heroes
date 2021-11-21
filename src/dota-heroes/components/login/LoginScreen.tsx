import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { User } from '../../interfaces/interfaces';

export const LoginScreen = () => {
    const { authLogin } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        
        const lastPath : string = localStorage.getItem( 'lastPath' ) || "/";

        navigate( lastPath, {
            replace: true
        });

        const user : User = {
            id: "1",
            name: "Yuki",
            email: "pnxditxyr@gmail.com",
            password: "MD5",
            logged: true,
        }
        authLogin( user );
    }

    return (
        <>
            <h1> Login </h1>
            <hr />
            <button
                onClick={ handleLogin }
            >
                Login
            </button>
        </>
    );
};

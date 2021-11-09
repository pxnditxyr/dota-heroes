import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<any> {

};

export const LoginScreen : React.FC<Props> = ({ history }) => {

    const handleLogin = () => {
        history.replace( "/" );
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

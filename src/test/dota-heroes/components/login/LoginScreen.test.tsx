import { mount } from 'enzyme';
import { LoginScreen } from '../../../../dota-heroes/components/login/LoginScreen';
import { AuthContext } from '../../../../dota-heroes/auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';

const mockNavigate = jest.fn();

jest.mock( 'react-router-dom', () =>({
    ...( jest.requireActual( 'react-router-dom' ) as object ),
    useNavigate: () => mockNavigate,
}));

describe( "Tests in <LoginScreen />", () => {
    const contextValue = {
        user: {
            id: "",
            name: "",
            email: "",
            password: "",
            logged: false,
        },
        authLogin: jest.fn(),
        authLogout: jest.fn(),
        auth: jest.fn(),
    }
    test( "Must show correctly", () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={[ '/login' ]}>
                    <LoginScreen />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect( wrapper ).toMatchSnapshot();
    });

    test( "Must call authLogin with default value, and call navigate", () => {
        const defaultUser = {
            id: "1",
            name: "Yuki",
            email: "pnxditxyr@gmail.com",
            password: "MD5",
            logged: true,
        };
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={[ '/login' ]}>
                    <LoginScreen />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        wrapper.find( 'button' ).simulate( 'click' );

        expect( contextValue.authLogin ).toHaveBeenCalled();
        expect( contextValue.authLogin ).toHaveBeenCalledWith( defaultUser );

        expect( mockNavigate ).toHaveBeenCalled();
        expect( mockNavigate ).toHaveBeenCalledWith( '/', { replace: true } );

        localStorage.setItem( "lastPath", '/intelligence' );

        wrapper.find( 'button' ).simulate( 'click' );
        
        expect( mockNavigate ).toHaveBeenCalled();
        expect( mockNavigate ).toHaveBeenCalledWith( '/intelligence', { replace: true } );
    });
});

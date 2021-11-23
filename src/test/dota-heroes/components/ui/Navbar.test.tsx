import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { AuthContext } from '../../../../dota-heroes/auth/AuthContext';
import { Navbar } from '../../../../dota-heroes/components/ui/Navbar';
import { User } from '../../../../dota-heroes/interfaces/interfaces';

const mockNavigate = jest.fn();

jest.mock( 'react-router-dom', () => ({
    ...( jest.requireActual( 'react-router-dom' ) as object ),
    useNavigate: () => mockNavigate,
}));

describe( "Tests in <Navbar />", () => {
    test( "Must show correctly", () => {
        const contextValue = {
            user: {
                id: "1",
                name: "Yuki",
                email: "example@test.com",
                password: "MD5_test",
                logged: true,
            },
            authLogin: ( user : User ) => { console.log( user ) },
            authLogout: ( logged : boolean ) => { console.log( logged ) },
            auth: () => { console.log( "Test" ) },
        };
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={[ '/' ]}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'span' ).text().trim() ).toBe( contextValue.user.name );
    });

    test( "Must call logout, call navigate and authLogout with args", () => {
        
        const contextValue = {
            user: {
                id: "1",
                name: "Yuki",
                email: "example@test.com",
                password: "MD5_test",
                logged: true,
            },
            authLogin: jest.fn(),
            authLogout: jest.fn(),
            auth: jest.fn(),
        };
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={[ '/' ]}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        wrapper.find( 'button' ).simulate( 'click' );
        expect( mockNavigate ).toHaveBeenCalled();
        expect( mockNavigate ).toHaveBeenCalledWith( '/login' );
        expect( contextValue.authLogout ).toHaveBeenCalled();
        expect( contextValue.authLogout ).toHaveBeenCalledWith( false );
    });
});

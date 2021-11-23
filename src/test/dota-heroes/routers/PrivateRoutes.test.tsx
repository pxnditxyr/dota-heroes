import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from '../../../dota-heroes/routers/PrivateRoute';
import { AuthContext } from '../../../dota-heroes/auth/AuthContext';
import { User } from '../../../dota-heroes/interfaces/interfaces';

const mockNavigate = jest.fn();

jest.mock( 'react-router-dom', () =>({
    ...( jest.requireActual( 'react-router-dom' ) as object ),
    Navigate: () => <span> Leaving place </span>,
}));


describe( "Tests in <PrivateRoutes />", () => {
    Storage.prototype.setItem = jest.fn();
    test( "Must show component if is athenticated, and save in localStorage", () => {
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
                    <PrivateRoute>
                        <h1> Private Routes Component </h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( "Private Routes Component" );
        expect( localStorage.setItem ).toHaveBeenCalledWith( "lastPath", '/' );
    });

    test( "Must be block component if it is not authenticated", () => {
        const contextValue = {
            user: {
                id: "",
                name: "",
                email: "",
                password: "",
                logged: false,
            },
            authLogin: ( user : User ) => { console.log( user ) },
            authLogout: ( logged : boolean ) => { console.log( logged ) },
            auth: () => { console.log( "Test" ) },
        };

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={[ '/' ]}>
                    <PrivateRoute>
                        <h1> Private Routes Component </h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper.find( 'span' ).text().trim() ).toBe( 'Leaving place' );
    });
});

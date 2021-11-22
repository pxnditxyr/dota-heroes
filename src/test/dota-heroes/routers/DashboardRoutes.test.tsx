import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { DashboardRoutes } from '../../../dota-heroes/routers/DashboardRoutes';
import { User } from '../../../dota-heroes/interfaces/interfaces';
import { AuthContext } from '../../../dota-heroes/auth/AuthContext';

describe( "Tests in <DashboardRoutes />", () => {

    const contextValue = {
        user: {
            id: "1",
            name: "testName",
            email: "example@gmail.com",
            password: "MD5_testPassword",
            logged: true,
        },
        authLogin: ( user : User ) => { console.log( user ) },
        authLogout: ( logged : boolean ) => { console.log( logged ) },
        auth: () => { console.log( "a" ) },
    };

    test( "Must show correctly path '/' Component Strength", () => {

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={[ '/' ]}>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'nav' ).text().trim().includes( contextValue.user.name ) ).toBe( true );
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( "Strength" );
    });

    test( "Must show correctly path '/agility' Component Agility", () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={[ '/agility' ]}>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( "Agility" );
    });

    test( "Must show correctly path '/intelligence' Component Intelligence", () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={[ '/intelligence' ]}>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( "Intelligence" );
    });
});

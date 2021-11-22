import { mount } from 'enzyme';
import { AppRouter } from '../../../dota-heroes/routers/AppRouter';
import { AuthContext } from '../../../dota-heroes/auth/AuthContext';
import { User } from '../../../dota-heroes/interfaces/interfaces';

describe( "Tests in <AppRouter />", () => {


    test( "If is not authenticated, must show the login", () => {
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
            auth: () => { console.log( "a" ) },
        };
        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( "Login" );
    });

    test( "If is authenticated, must show the StrenghtScreen", () => {
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
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( "Strength" );

    });
});

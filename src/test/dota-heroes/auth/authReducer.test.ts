import { authReducer } from '../../../dota-heroes/auth/authReducer';
import { User } from '../../../dota-heroes/interfaces/interfaces';

describe( "Tests in authReducer", () => {
    const INITIAL_STATE : User= { 
        id: "",
        name: "",
        email: "",
        password: "",
        logged: false,
    };

    const TEST_USER : User = {
        id: "testId",
        name: "testName",
        email: "example@testEmail.com",
        password: "MD5_test",
        logged: true,
    }

    test( "Must be return the default state", () => {
        const state = authReducer( INITIAL_STATE, {} );
        expect( state ).toEqual( INITIAL_STATE );
    });

    test( "Must authenticate and place the 'user'", () => {
        const action = {
            type: "authLogin",
            payload: TEST_USER,
        };
        const state = authReducer( INITIAL_STATE, action );
        expect( state ).toEqual( TEST_USER );
    });

    test( "Must delete user and change legged to false", () => {
        const action = {
            type: "authLogout",
            payload: false,
        };
        const state = authReducer( TEST_USER, action );
        expect( state ).toEqual( INITIAL_STATE );
    })

});

